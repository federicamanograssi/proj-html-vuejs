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
                    socialIcon:'fab fa-facebook-square"'
                },
                {
                    socialName:'instagram',
                    socialLink:'#',
                    socialIcon:'fab fa-instagram-square'
                },
            ]            
        },


        // TENTATIVO 01 - PUSH IN ARRAY
        pagesList :[
            {
                pageName: 'Privacy',
                pageLink:'#',
                pageCategory:'legal',
                headerMenuView:false,
                 // TENTATIVO 01
                pageMenuView: true,
                 // TENTATIVO 02
                footerWidget: 2
            },
            {
                pageName: 'Terms',
                pageLink:'#',
                pageCategory:'legal',
                headerMenuView:false,
                // TENTATIVO 01
                pageMenuView: true,
                 // TENTATIVO 02
                footerWidget: 2

            },
            {
                pageName: 'Cookie Policy',
                pageLink:'#',
                pageCategory: 'legal',
                headerMenuView:false,
                // TENTATIVO 01
                pageMenuView: true,
                 // TENTATIVO 02
                footerWidget: 3

            },
            {
                pageName: 'Sitemap',
                pageLink:'#',
                pageCategory: 'legal',
                headerMenuView:false,
                // TENTATIVO 01
                pageMenuView: true,
                 // TENTATIVO 02
                footerWidget: ''

            },
            {
                pageName: 'Home',
                pageLink:'#',
                pageCategory: 'general',
                headerMenuView:true,
                // TENTATIVO 01
                pageMenuView: true,
                // TENTATIVO 02
                footerWidget: ''
            },
            {
                pageName: 'About',
                pageLink:'#',
                pageCategory: 'general',
                headerMenuView:true,
                // TENTATIVO 01
                pageMenuView: true,
                // TENTATIVO 02
                footerWidget: ''
            },
            {
                pageName: 'Academics',
                pageLink:'#',
                pageCategory: 'general',
                headerMenuView:true,
                // TENTATIVO 01
                pageMenuView: true,
                // TENTATIVO 02
                footerWidget: ''
            },
            {
                pageName: 'Courses',
                pageLink:'#',
                pageCategory: 'general',
                headerMenuView:true,
                // TENTATIVO 01
                pageMenuView: true,
                // TENTATIVO 02
                footerWidget: ''
            },
            {
                pageName: 'News',
                pageLink:'#',
                pageCategory: 'general',
                headerMenuView:true,
                // TENTATIVO 01
                pageMenuView: true,
                // TENTATIVO 02
                footerWidget: ''
            },

        ],
        headerPagesMenu:[],
        footerWidgets:[],
        legalPagesMenu:[]
    },
    created(){
        getHeaderPagesMenu(this.pagesList,this.headerPagesMenu)

        // // per tentativo 01
        getCategoryPagesMenu(this.pagesList,'legal',this.legalPagesMenu)  
        
        //per tentativo 2
        getFooterWidgetPages(this.pagesList,this.footerWidgets)

    }
    
})

function getCategoryPagesMenu(pageList,category,pageViewList){
    pageList.forEach(element => {
        if(element.pageCategory==category && element.pageMenuView){
            pageViewList.push(element)
        }
        return pageViewList
    });
}
function getHeaderPagesMenu(pageList,pageViewList){
    pageList.forEach(element => {
        if(element.headerMenuView){
            pageViewList.push(element)
        }
        return pageViewList
    });
}
function getFooterWidgetPages(pageList,pageViewList){
    pageList.forEach(element => {
        if(element.footerWidget !=''){
            pageViewList.push(element)
        }
        return pageViewList
    });
}