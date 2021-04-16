var app = new Vue({
    el:'#root',
    data:{
        mainContacts:[
            {
                name: 'Legal Name',
                text:'Academy',
                relatedIcon:'',
                link:'#',
                contactWidget: ''
            },
            {
                name: 'address',
                text:'900 Wood Street, MI New York 48607',
                relatedIcon:'fas fa-map-marker-alt',
                link:'#',
                contactWidget: 1
            },
            {
                name: 'email',
                text:'info@example.com',
                relatedIcon:'fas fa-envelope',
                link:'#',
                contactWidget: 3
            },
            {
                name: 'phone',
                text:'+56 345 678 000-09',
                relatedIcon:'fas fa-phone-square-alt',
                link:'#',
                contactWidget: 2
            },   
        ],

        // mainContacts:{
        //     'fullLegalName': {
        //         text:'Academy',
        //         relatedIcon:'',
        //         link:'#',
        //         footerWidget: ''

        //     },
        //     'address' : {
        //         text:'900 Wood Street, MI New York 48607',
        //         relatedIcon:'fas fa-map-marker-alt',
        //         link:'#',
        //         footerWidget: 1
        //     },
        //     'email' : {
        //         text:'info@example.com',
        //         relatedIcon:'fas fa-envelope',
        //         link:'#',
        //         footerWidget: 1
        //     },
        //     'phone' : {
        //         text:'+56 345 678 000-09',
        //         relatedIcon:'fas fa-phone-square-alt',
        //         link:'#',
        //         footerWidget: 1
        //     },          
        // },

        pagesList :[
            {
                pageName: 'Privacy',
                pageLink:'#',
                pageCategory:'legal',
                headerMenu:'',
                footerWidget: [
                    {
                        footerWidgetNumber:2,
                        footerWidgetPosition:1
                    },
                    {
                        footerWidgetNumber:'bottom_footer',
                        footerWidgetPosition:1
                    }
                ]
            },
            {
                pageName: 'Terms',
                pageLink:'#',
                pageCategory:'legal',
                headerMenu:'',
                footerWidget: [
                    {
                        footerWidgetNumber:2,
                        footerWidgetPosition:2
                    },
                    {
                        footerWidgetNumber:'bottom_footer',
                        footerWidgetPosition:2
                    }
                ]

            },
            {
                pageName: 'Cookie Policy',
                pageLink:'#',
                pageCategory: 'legal',
                headerMenu:'',
                footerWidget: [
                    {
                        footerWidgetNumber:2,
                        footerWidgetPosition:3
                    },
                    {
                        footerWidgetNumber:'bottom_footer',
                        footerWidgetPosition:3
                    }
                ]

            },
            {
                pageName: 'Sitemap',
                pageLink:'#',
                pageCategory: 'legal',
                headerMenu:'',
                footerWidget: [
                    {
                        footerWidgetNumber:2,
                        footerWidgetPosition:4
                    },
                    {
                        footerWidgetNumber:'bottom_footer',
                        footerWidgetPosition:4
                    }
                ]
            },
            {
                pageName: 'About',
                pageLink:'#',
                pageCategory: 'general',
                headerMenu:2,
                footerWidget: ''
            },
            {
                pageName: 'Home',
                pageLink:'#',
                pageCategory: 'general',
                headerMenu:1,
                footerWidget: ''
            },
            {
                pageName: 'News',
                pageLink:'#',
                pageCategory: 'blog',
                headerMenu:5,
                footerWidget: ''
            },
            {
                pageName: 'Academics',
                pageLink:'#',
                pageCategory: 'courses',
                headerMenu:3,
                footerWidget: ''
            },
            {
                pageName: 'Courses',
                pageLink:'#',
                pageCategory: 'courses',
                headerMenu:4,
                footerWidget: ''
            },
            {
                pageName: 'accomodation',
                pageLink:'#',
                pageCategory: 'info',
                headerMenu:false,
                footerWidget:[ 
                {
                    footerWidgetNumber:3,
                    footerWidgetPosition:1
                }]
            },
            {
                pageName: 'arts academics',
                pageLink:'#',
                pageCategory: 'info',
                headerMenu:'',
                footerWidget: [{
                    footerWidgetNumber:3,
                    footerWidgetPosition:2
                }]
            },
            {
                pageName: 'central services',
                pageLink:'#',
                pageCategory: 'info',
                headerMenu:'',
                footerWidget: [{
                    footerWidgetNumber:3,
                    footerWidgetPosition:3
                }]
            },
            {
                pageName: 'conferences and events',
                pageLink:'#',
                pageCategory: 'event',
                headerMenu:'',
                footerWidget: [{
                    footerWidgetNumber:3,
                    footerWidgetPosition:4
                }]
            },
            {
                pageName: 'food and drink',
                pageLink:'#',
                pageCategory: 'info',
                headerMenu:'',
                footerWidget: [{
                    footerWidgetNumber:3,
                    footerWidgetPosition:5
                }]
            },
            
            {
                pageName: 'contact us',
                pageLink:'#',
                pageCategory: 'utilities',
                headerMenu:'',
                footerWidget: [{
                    footerWidgetNumber:4,
                    footerWidgetPosition:2
                }]
            },
            {
                pageName: 'FAQs',
                pageLink:'#',
                pageCategory: 'utilities',
                headerMenu:'',
                footerWidget: [{
                    footerWidgetNumber:4,
                    footerWidgetPosition:3
                }]
            },
            {
                pageName: 'request information',
                pageLink:'#',
                pageCategory: 'utilities',
                headerMenu:'',
                footerWidget: [{
                    footerWidgetNumber:4,
                    footerWidgetPosition:4
                }]
            },
            {
                pageName: 'privacy notice',
                pageLink:'#',
                pageCategory: 'utilities',
                headerMenu:'',
                footerWidget: [{
                    footerWidgetNumber:4,
                    footerWidgetPosition:5
                }]
            },
            {
                pageName: 'admission',
                pageLink:'#',
                pageCategory: 'utilities',
                headerMenu:'',
                footerWidget: [
                    {
                        footerWidgetNumber:4,
                        footerWidgetPosition:1
                    }
                ]
            },

        ],
        enteredEmail:'',
        subscribedEmails:[]
        
    },
    methods:{
        getFooterWidgetPages(widgetNumber){

            let widgetPages=[];
            this.pagesList.forEach(element => {
                for(let i=0; i<element.footerWidget.length;i++){
                    let newEl={
                        pageName:element.pageName,
                        pageLink:element.pageLink,
                        footerWidgetPosition:element.footerWidget[i].footerWidgetPosition
                    };
                    if(element.footerWidget[i].footerWidgetNumber ==widgetNumber){
                        widgetPages.push(newEl)
                    }
                };
                widgetPages.sort(function(a,b){
                    return a.footerWidgetPosition - b.footerWidgetPosition
                })    
            }); 
            return widgetPages
        },

        
        getHeaderPagesMenu(){
            let headerMenuList=[];
        
            this.pagesList.forEach(element => {
                if(element.headerMenu != ''){
                    headerMenuList.push(element)
                }
            });
            headerMenuList.sort(function(a,b){
                return a.headerMenu - b.headerMenu
            })
            return headerMenuList
        },

        getContactWidget(){
            let contactWidgetList=[];
        
            this.mainContacts.forEach(element => {
                if(element.contactWidget != ''){
                    contactWidgetList.push(element)
                }
            });
            contactWidgetList.sort(function(a,b){
                return a.contactWidget - b.contactWidget
            })
            return contactWidgetList
        },

        sendSubscribtion(){
            this.subscribedEmails.push(this.enteredEmail);
            this.enteredEmail=''
        }

    }
    
});


