<?php

declare(strict_types=1);

/**
 * @copyright 2020 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2020 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

namespace OCA\Files\Search;

use OC\Search\Provider\File;
use OC\Search\Result\File as FileResult;
use OCP\Files\IMimeTypeDetector;
use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\IUser;
use OCP\Search\IProvider;
use OCP\Search\ISearchQuery;
use OCP\Search\SearchResult;
use OCP\Search\SearchResultEntry;

class FilesSearchProvider implements IProvider {

	/** @var File */
	private $fileSearch;

	/** @var IL10N */
	private $l10n;

	/** @var IURLGenerator */
	private $urlGenerator;

	/** @var IMimeTypeDetector */
	private $mimeTypeDetector;

	public function __construct(File $fileSearch,
								IL10N $l10n,
								IURLGenerator $urlGenerator,
								IMimeTypeDetector $mimeTypeDetector) {
		$this->l10n = $l10n;
		$this->fileSearch = $fileSearch;
		$this->urlGenerator = $urlGenerator;
		$this->mimeTypeDetector = $mimeTypeDetector;
	}

	/**
	 * @inheritDoc
	 */
	public function getId(): string {
		return 'files';
	}

	/**
	 * @inheritDoc
	 */
	public function getName(): string {
		return $this->l10n->t('Files');
	}

	/**
	 * @inheritDoc
	 */
	public function getOrder(string $route, array $routeParameters): int {
		if ($route === 'files.View.index') {
			// Before comments
			return -5;
		}
		return 5;
	}

	/**
	 * @inheritDoc
	 */
	public function search(IUser $user, ISearchQuery $query): SearchResult {
		return SearchResult::complete(
			$this->l10n->t('Files'),
			array_map(function (FileResult $result) {
				// Generate thumbnail url
				$thumbnailUrl = $result->has_preview
					? $this->urlGenerator->linkToRoute('core.Preview.getPreviewByFileId', ['x' => 32, 'y' => 32, 'fileId' => $result->id])
					: '';

				return new SearchResultEntry(
					$thumbnailUrl,
					$result->name,
					$this->formatSubline($result),
					$result->link,
					$result->type === 'folder' ? 'icon-folder' : $this->mimeTypeDetector->mimeTypeIcon($result->mime_type)
				);
			}, $this->fileSearch->search($query->getTerm()))
		);
	}

	/**
	 * Format subline for files
	 *
	 * @param FileResult $result
	 * @return string
	 */
	private function formatSubline($result): string {
		// Do not show the location if the file is in root
		if ($result->path === '/' . $result->name) {
			return '';
		}

		$path = ltrim(dirname($result->path), '/');
		return $this->l10n->t('in %s', [$path]);
	}
}
