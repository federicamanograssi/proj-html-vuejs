var app = new Vue({
    el:'#root',
    data:{
        mainContacts:{
            'fullLegalName': {
                text:'Academy',
                relatedIcon:'',
                link:'#'
            },
            'address' : {
                text:'900 Wood Street, MI New York 48607',
                relatedIcon:'fas fa-map-marker-alt',
                link:'#'
            },
            'email' : {
                text:'info@example.com',
                relatedIcon:'fas fa-envelope',
                link:'#'
            },
            'phone' : {
                text:'+56 345 678 000-09',
                relatedIcon:'fas fa-phone-square-alt',
                link:'#'
            },
            'socials' : [
                {
                    socialName:'facebook',
                    socialLink:'#',
                    socialIcon:'fab fa-facebook-square'
                },
                {
                    socialName:'instagram',
                    socialLink:'#',
                    socialIcon:'fab fa-instagram-square'
                },
            ]            
        },

        pagesList :[
            {
                pageName: 'Privacy',
                pageLink:'#',
                pageCategory:'legal',
                headerMenu:false,
                footerWidget: [2,'bottom_footer'
                    // {
                    //     footerWidgetNumber:2,
                    //     footerWidgetPosition:'2'
                    // },
                    // {
                    //     footerWidgetNumber:'bottom_footer',
                    //     footerWidgetPosition:'2'
                    // }
                ]
            },
            {
                pageName: 'Terms',
                pageLink:'#',
                pageCategory:'legal',
                headerMenu:false,
                footerWidget: [2,'bottom_footer'
                    // {
                    //     footerWidgetNumber:2,
                    //     footerWidgetPosition:'1'
                    // },
                    // {
                    //     footerWidgetNumber:'bottom_footer',
                    //     footerWidgetPosition:'1'
                    // }
                ]

            },
            {
                pageName: 'Cookie Policy',
                pageLink:'#',
                pageCategory: 'legal',
                headerMenu:false,
                footerWidget: [2,'bottom_footer']

            },
            {
                pageName: 'Sitemap',
                pageLink:'#',
                pageCategory: 'legal',
                headerMenu:false,
                footerWidget: [2,'bottom_footer']
            },
            {
                pageName: 'Home',
                pageLink:'#',
                pageCategory: 'general',
                headerMenu:true,
                footerWidget: ''
            },
            {
                pageName: 'About',
                pageLink:'#',
                pageCategory: 'general',
                headerMenu:true,
                footerWidget: ''
            },
            {
                pageName: 'Academics',
                pageLink:'#',
                pageCategory: 'courses',
                headerMenu:true,
                footerWidget: ''
            },
            {
                pageName: 'Courses',
                pageLink:'#',
                pageCategory: 'courses',
                headerMenu:true,
                footerWidget: ''
            },
            {
                pageName: 'News',
                pageLink:'#',
                pageCategory: 'blog',
                headerMenu:true,
                footerWidget: ''
            },
            {
                pageName: 'accomodation',
                pageLink:'#',
                pageCategory: 'info',
                headerMenu:false,
                footerWidget: '3'
            },
            {
                pageName: 'arts academics',
                pageLink:'#',
                pageCategory: 'info',
                headerMenu:false,
                footerWidget: '3'
            },
            {
                pageName: 'central services',
                pageLink:'#',
                pageCategory: 'info',
                headerMenu:false,
                footerWidget: '3'
            },
            {
                pageName: 'conferences and events',
                pageLink:'#',
                pageCategory: 'event',
                headerMenu:false,
                footerWidget: '3'
            },
            {
                pageName: 'food and drink',
                pageLink:'#',
                pageCategory: 'info',
                headerMenu:false,
                footerWidget: '3'
            },
            {
                pageName: 'admission',
                pageLink:'#',
                pageCategory: 'utilities',
                headerMenu:false,
                footerWidget: '4'
            },
            {
                pageName: 'contact us',
                pageLink:'#',
                pageCategory: 'utilities',
                headerMenu:false,
                footerWidget: '4'
            },
            {
                pageName: 'FAQs',
                pageLink:'#',
                pageCategory: 'utilities',
                headerMenu:false,
                footerWidget: '4'
            },
            {
                pageName: 'request information',
                pageLink:'#',
                pageCategory: 'utilities',
                headerMenu:false,
                footerWidget: '4'
            },
            {
                pageName: 'privacy notice',
                pageLink:'#',
                pageCategory: 'utilities',
                headerMenu:false,
                footerWidget: '4'
            },

        ],
        
    },
    methods:{

        // RIEMPIMENTO FOOTER WIDGET TRAMITE PROPRIETà AD HOC OGGETTO della PAGINA 
        getFooterWidgetPages(widgetNumber){
            let widgetPages=[];
        
            this.pagesList.forEach(element => {
                if(element.footerWidget.includes(widgetNumber) ){
                    widgetPages.push(element)
                }
                return widgetPages
            });

            // PER ORDINARE A MIO PIACERE ALL'INTERNO DEL WIDGET
            // this.pagesList.forEach(element => {
            //         if(element.footerWidget != ''){
            //             for( let i=0; i<element.footerWidget.length; i++){
            //                 if(element.footerWidget[i].footerWidgetNumber == widgetNumber){
            //                     widgetPages.push(element)
            //                 }
            //             }
            //             return widgetPages
            //         }
            //         return widgetPages
            //     });

            // widgetPages.sort((a,b)=>{

            //     return a.widgetIndex - b.widgetIndex
            // })
            return widgetPages
        },
        getHeaderPagesMenu(){
            let headerMenuList=[];
        
            this.pagesList.forEach(element => {
                if(element.headerMenu){
                    headerMenuList.push(element)
                }
                return headerMenuList
            });
            return headerMenuList
        },

    }
    
})
