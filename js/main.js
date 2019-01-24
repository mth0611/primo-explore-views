import '@orbis-cascade/primo-explore-custom-actions';
import 'primo-explore-custom-library-card-menu';
import 'primo-explore-clickable-logo-to-any-link';
import 'primo-explore-libraryh3lp-widget';
import 'primo-explore-getit-to-link-resolver';
import 'primo-explore-nyu-eshelf';
import 'primo-explore-search-bar-sub-menu';
import 'primo-explore-custom-requests';
import 'primo-explore-custom-login';

import { viewName } from './viewName';
import { customActionsConfig } from './customActions';
import { customLibraryCardMenuItemsConfig } from './customLibraryCardMenu';
import { clickableLogoLinkConfig } from './clickableLogoToAnyLink';
import { libraryh3lpWidgetConfig } from './libraryh3lpWidget';
import { getitToLinkResolverConfig } from './getitToLinkResolver';
import { nyuEshelfConfig } from './nyuEshelf';
import { searchBarSubMenuItemsConfig } from './searchBarSubMenu';
import customRequestsConfig from './customRequestsConfig';
import customLoginConfig from './customLoginConfig';

import prmLocationItemAfterPartial from '../html/prm_location_items_after_partial.html';

let app = angular.module('viewCustom', [
                                        'customActions',
                                        'customLibraryCardMenu',
                                        'clickableLogoToAnyLink',
                                        'libraryh3lpWidget',
                                        // 'getitToLinkResolver',
                                        'nyuEshelf',
                                        'searchBarSubMenu',
                                        'primoExploreCustomLogin',
                                        'primoExploreCustomRequests',
                                      ]);

app
  .constant(customLibraryCardMenuItemsConfig.name, customLibraryCardMenuItemsConfig.config)
  .constant(clickableLogoLinkConfig.name, clickableLogoLinkConfig.config)
  .constant(libraryh3lpWidgetConfig.name, libraryh3lpWidgetConfig.config)
  .constant(getitToLinkResolverConfig.name, getitToLinkResolverConfig.config)
  .constant(nyuEshelfConfig.name, nyuEshelfConfig.config)
  .constant(searchBarSubMenuItemsConfig.name, searchBarSubMenuItemsConfig.config)
  .constant(customRequestsConfig.name, customRequestsConfig.config)
  .constant(customLoginConfig.name, customLoginConfig.config)
  .value('customNoSearchResultsTemplateUrl', 'custom/'+viewName+'/html/noSearchResults.html')
  .filter('encodeURIComponent', ['$window', function($window) {
    return $window.encodeURIComponent;
  }])
  .component('prmActionListAfter', {
    template: customActionsConfig.template
  })
  .component('prmFullViewServiceContainerAfter', {
    template: '<getit-to-link-resolver-full></getit-to-link-resolver-full>'
  })
  .component('prmSearchResultAvailabilityLineAfter', {
    template: '<nyu-eshelf></nyu-eshelf>'
  })
  .component('prmSearchBookmarkFilterAfter', {
    template: '<nyu-eshelf-toolbar></nyu-eshelf-toolbar>'
  })
  .component('prmSearchBarAfter', {
    template: '<search-bar-sub-menu></search-bar-sub-menu>'
  })
  .component('prmAuthenticationAfter', {
    template: `<primo-explore-custom-login></primo-explore-custom-login>`
  })
  .component('prmLocationItemAfter', {
    template: `<primo-explore-custom-requests></primo-explore-custom-requests>`,
    controller: ['$element', function ($element) {
      const ctrl = this;
      ctrl.$postLink = () => {
        const $target = $element.parent().query('div.md-list-item-text');
        const $el = $element.detach();
        $target.append($el);
        $element.addClass('layout-align-center-center layout-row');
      };
    }]
  })
  .component('prmLocationItemsAfter', {
    template: `${prmLocationItemAfterPartial}`
  });

app.run(runBlock);

runBlock.$inject = ['nyuEshelfService'];

function runBlock(nyuEshelfService) {
  nyuEshelfService.initEshelf();
}
