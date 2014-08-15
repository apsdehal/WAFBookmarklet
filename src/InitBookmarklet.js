/* 
    Pundit: a novel semantic web annotation tool
    Copyright (c) 2013 Net7 SRL, <http://www.netseven.it/>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    See LICENSE.TXT or visit http://thepund.it for the full text of the license.
*/
(function() {
    var h = document.getElementsByTagName('head')[0],
        d = document.createElement('script'),
        l = document.createElement('link');

    l.rel = 'stylesheet';
    l.href = 'https://rawgithub.com/apsdehal/WAFBookmarklet/master/bookmarklet_build/css/pundit.css';
    l.type = 'text/css';
    l.media = 'screen';
    l.charset = 'utf-8';
    h.appendChild(l);

    // Important: without var !!
    punditConfig = {
        /**
         * @property punditConfig.annotationServerBaseURL
         * @type string
         * @description Absolute base URL of the Pundit server side APIs, ending
         * with /
         * @default http://demo.as.thepund.it:8088/annotationserver/
         */
        annotationServerBaseURL: 'http://demo-cloud.as.thepund.it:8080/annotationserver/',



        debugAllModules: false,
        vocabularies: [
        ],

        useBasicRelations: true,
    
        modules: {


            /**
             * TODO
             */
            'pundit.ng.ImageAnnotatorHelper': {
                active: false
            },

            /**
             * @property punditConfig.modules.annotators
             * @type object
             * @description Configuration for Pundit annotators: components who
             * deal (read, write, visualize etc) with various type of items used
             * into annotations, for example text fragments, image fragments etc.
             */
            'annotators': {
                'TextFragmentAnnotator': {
                    active: true,
                    debug: false
                }
            },
            
            /**
             * @property punditConfig.modules.selectors
             * @type object
             * @description Configuration for Pundit selectors: components who
             * retrieve items from remote sources like Freebase, Wordnet, Europeana
             * etc. Each children should be named after a Selector found in src/selectors
             * omitting the ending part "Selector". Each object must contain the
             * properties name (string), label (string) and active (boolean). Moreover
             * it can contain selector-specific configuration options, like europeanaKey
             * or limit or keyInputTimerLength. See each selector docs for more info.
             */
            'selectors': {
                'Freebase': {
                    name: 'freebase', label: 'Freebase', active: false
                },
                'DBPedia': {
                    name: 'dbpedia', label: 'DBPedia', active: false
                },
                'KorboBasket': {
                    name: 'korbo', label: 'Korbo', active: false
                },
                'Wordnet': {
                    name: 'wordnet', label: 'Word Net', active: false
                },
                'Europeana': {
                    name: 'europeana', label: 'Europeana', active: false
                },
                'EuropeanaEDM': {
                    name: 'europeanaedm', label: 'Europeana EDM', active: false
                },
                // DEBUG: not ready for prime time, keep it active = false !
                'BibServer': {
                    name: 'bibserver', label: 'BibServer', active: false
                },
                'WikidataItems':{
                    name: 'wikidataItems', label: 'Wikidata Items', active: true
                },
                'WikidataProperties':{
                    name: 'wikidataProperties', label: 'Wikidata Properties', active: true
                },
                
            },

            /* Active modules by default: */
            /* TODO: comments about it? */
            
            'pundit.Help': {
                introductionFile: undefined,
                introductionWindowTitle: '',
                showIntroductionAtLogin: false,
                active: true
            },
            
            'pundit.ContactHelper': {
                active: true
            },
            
            'pundit.fasttexthandler': {
                active: true
            },

            'pundit.PageHandler': {
                active: true
            },

            'pundit.ImageFragmentHandler': {
                active: true
            },
            
            'pundit.ImageAnnotationPanel': {
                active: true
            },

            'pundit.NamedContentHandler': {
                active: true
            },
            
            'pundit.AnalyticsHelper': {
                active: true
            },
            
            // Used :-)
            // WORNING: cannot deactivate at the moment!
            'pundit.Recognizer': {
                active: true,
                debug: false,
                showAction: false
            },

            // Used :-)
            'pundit.NotebookManager': {
                active: true,
                notebookSharing: true,
                notebookActivation: true,
                showFilteringOptions: false,
                defaultFilteringOption: 'all', // valid options: 'all' | 'active'
                activateFromAnnotations: false,
                askBaseURL: 'http://demo.ask.thepund.it/#/myNotebooks/',
                debug: false
            },

            'pundit.XpointersHelper': {
                // Node name and class used to wrap our annotated content
                wrapNodeName: 'span',
                wrapNodeClass: 'cons',

                // Class used on a container to indicate it's a named content: xpointers
                // will start from that node
                contentClasses: ['pundit-content'],

                // Nodes with these classes will be ignored when building xpointers
                // and consolidating annotations
                ignoreClasses: ['cons', 'pundit-icon-annotation']
            }
        }
    };

    djConfig = {
        afterOnLoad: true,
        useXDomain: true,
        baseUrl: "https://rawgithub.com/apsdehal/WAFBookmarklet/master/bookmarklet_build/dojo/",
        require: ["dojo.Bookmarklet"]
    };
    d.type = 'text/javascript';
    d.src = 'https://rawgithub.com/apsdehal/WAFBookmarklet/master/bookmarklet_build/dojo/dojo.xd.js';
    h.appendChild(d);

})();