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
            'socialContact' : {
                'facebook':'#',
                'instagram':'#'
            }
            
        },


        // TENTATIVO 01 - PUSH IN ARRAY
        pagesList :[
            {
                pageName: 'Privacy',
                pageLink:'#',
                pageCategory:'legal',
                pageMenuView: true,
                headerMenuView:false
            },
            {
                pageName: 'Terms',
                pageLink:'#',
                pageCategory:'legal',
                pageMenuView: true,
                headerMenuView:false
            },
            {
                pageName: 'Cookie Policy',
                pageLink:'#',
                pageCategory: 'legal',
                pageMenuView: true,
                headerMenuView:false
            },
            {
                pageName: 'Sitemap',
                pageLink:'#',
                pageCategory: 'legal',
                pageMenuView: true,
                headerMenuView:false
            },
            {
                pageName: 'Home',
                pageLink:'#',
                pageCategory: 'general',
                pageMenuView: true,
                headerMenuView:true
            },
            {
                pageName: 'About',
                pageLink:'#',
                pageCategory: 'general',
                pageMenuView: true,
                headerMenuView:true
            },
            {
                pageName: 'Academics',
                pageLink:'#',
                pageCategory: 'general',
                pageMenuView: true,
                headerMenuView:true
            },
            {
                pageName: 'Courses',
                pageLink:'#',
                pageCategory: 'general',
                pageMenuView: true,
                headerMenuView:true
            },
            {
                pageName: 'News',
                pageLink:'#',
                pageCategory: 'general',
                pageMenuView: true,
                headerMenuView:true
            },

        ],
        headerPagesMenu:[],
        legalPagesMenu:[]
    },
    created(){
        getCategoryPagesMenu(this.pagesList,'legal',this.legalPagesMenu),
        getHeaderPagesMenu(this.pagesList,this.headerPagesMenu)
          
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