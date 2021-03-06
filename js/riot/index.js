

riot.compile(function() {

    /* ---------------------------------------------
     Mount Riot Tags
     --------------------------------------------- */
    riot.mount('header, nav-menu, top-section, about-section, skill-section, footer');


    /* ---------------------------------------------
     Mount Technology Section Using Client Section Tag
     --------------------------------------------- */
    riot.mount('technology-section', 'client-section', {
        title: 'Technology',
        clients: [
            { name: 'HTML', image: 'img/tech/html.png' },
            { name: 'CSS', image: 'img/tech/css.png' },
            { name: 'Bootstrap', image: 'img/tech/bootstrap.png' },
            { name: 'Semantic UI', image: 'img/tech/semantic-ui.png' },
            { name: 'Javascript', image: 'img/tech/js.png' },
            { name: 'Sass', image: 'img/tech/sass.png' },
            { name: 'PHP', image: 'img/tech/php.png' },
            { name: 'MySQL', image: 'img/tech/mysql.png' },
            { name: 'Symfony', image: 'img/tech/symfony.png' },
            { name: 'CodeIgniter', image: 'img/tech/codeigniter.png' },
            { name: 'Wordpress', image: 'img/tech/wordpress.png' },
            { name: 'Drupal', image: 'img/tech/drupal.png' },
            { name: 'jQuery', image: 'img/tech/jquery.png' },
            { name: 'Ajax', image: 'img/tech/ajax.png' },
            { name: 'Angular', image: 'img/tech/angular.png' },
            { name: 'Riot JS', image: 'img/tech/riot.png' },
            { name: '.Net', image: 'img/tech/dotnet.png' }
        ]
    });


    /* ---------------------------------------------
     Mount Education Section Using Timeline Section Tag
     --------------------------------------------- */
    riot.mount('education-section', 'timeline-section', {
        title: 'Education',
        items: [
            {
                tag: 'University of Science and Technology Settat',
                title: 'Professional license in application design and development',
                time: '2015 - 2016'
            },
            {
                tag: 'ISTA NTIC Hay Salam Sale',
                title: 'Software development specialized technician',
                time: '2013 - 2015',
                position: 'right'
            },
            {
                tag: 'University of Rabat',
                title: '1st year in physics-chemistry branch',
                time: '2012 - 2013'
            },
            {
                tag: 'Abderrahim Bouabid High School',
                title: 'Bachelor\'s degree in physics',
                time: '2009 - 2012',
                position: 'right'
            }
        ]
    });


    /* ---------------------------------------------
     Mount Experience Section Using Timeline Section Tag
     --------------------------------------------- */
    riot.mount('experience-section', 'timeline-section', {
        title: 'Experience',
        items: [
            {
                tag: 'Blue Mango Software',
                title: 'Analyst/Programmer',
                description: [
                    '✔ Customizing open-source projects such as: Dolibarr, osTicket, Alfresco, VICIdial.',
                    '✔ Creating websites/dashboards using technologies like Wordpress, PHP, Javascript ...',
                    '✔ Doing server administration & backup stuff.'
                ],
                time: 'April 2019 - present',
                position: 'right'
            },
            {
                tag: 'Freelance',
                title: 'Freelancer',
                description: [
                    '✔ Developing custom <a href="https://www.dolistore.com/en/search?orderby=position&orderway=desc&search_query=axel" target="_blank">modules</a> for Dolibarr.',
                    '✔ Publishing some of my own projects like <a href="https://github.com/AXeL-dev/Dindo-Bot" target="_blank">Dindo Bot</a>, <a href="https://github.com/AXeL-dev/distract-me-not" target="_blank">Distract Me Not</a>, <a href="https://github.com/AXeL-dev/dolibase" target="_blank">Dolibase</a>, <a href="https://github.com/AXeL-dev/riot-presents" target="_blank">Riot Presents</a>.',
                    '✔ Contributing to open-source community. <a href="https://github.com/Jessewb786/Silaty/graphs/contributors" target="_blank">#Silaty</a> <a href="https://github.com/Dolibarr/dolibarr/graphs/contributors" target="_blank">#Dolibarr</a>'
                ],
                time: '2017 - 2019'
            },
            {
                tag: 'Kenitra Negoce Technology',
                title: 'Software Developer',
                description: [
                    '✔ Bug fixes and modules development on SaturnERP (a copy of Dolibarr ERP).',
                    '✔ Redesigning the graphical interface of the cloning tool CLONEWise (based on FOG Project).'
                ],
                time: 'February 2016 - June 2016',
                position: 'right'
            },
            {
                tag: 'ZTE CORPORATION',
                title: 'Traineeship',
                description: [
                    'Creating a web application in PHP to simplify script generation and execution from Excel sheets.'
                ],
                time: 'February 2015 - April 2015'
            }
        ]
    });


    /* ---------------------------------------------
     Mount Portfolio Section Tag
     --------------------------------------------- */
    riot.mount('portfolio-section', {
        title: 'Portfolio',
        filters: [
            { name: 'Python', filter: '.python' },
            { name: 'PHP', filter: '.php' },
            { name: 'Javascript', filter: '.js' },
            { name: 'ASP.Net', filter: '.asp' }
        ],
        max: 9
    });


    /* ---------------------------------------------
     Mount Blog Section Tag
     --------------------------------------------- */
    riot.mount('blog-section', {
        title: 'Blog',
        posts: blog_posts,
        max: 4
    });


    /* ---------------------------------------------
     Initialize Custom JS
     --------------------------------------------- */
    initAll();

});
