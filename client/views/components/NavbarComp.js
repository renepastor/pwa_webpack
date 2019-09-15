import loginComp from '../components/LoginComp'

function resizeBroadcast() {
    var timesRun = 0;
    var interval = setInterval(function(){
      timesRun += 1;
      if(timesRun === 5){
        clearInterval(interval);
      }
      window.dispatchEvent(new Event('resize'));
    }, 62.5);
  }


let NavbarComp = {
    render: async () => {
      
      let view =  /*html*/`  
      <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
        <span class="fa fa-bars text-dark m-1"></span>
      </button>
      <a class="navbar-brand" href="#">
        <img class="navbar-brand-full" src="img/logo.png" id="logo" width="100" alt="Logo">
        <img class="navbar-brand-minimized" src="img/symbol.png" id="symbol" width="100" alt="Logo">
      </a>
      <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
        <span class="fa fa-bars text-dark m-1"></span>
      </button>
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item d-md-down-none">
          <a class="nav-link nav-item dropdown d-md-down-none" href="#"></a>
        </li>
        <li class="nav-item d-md-down-none p-1 text-right" id="nombreUser"></li>
        <li class="">
          <img width="50" height="50" class="img-circle border fa fa-2x border-primary" src="../img/user.png" alt="v" id="btnLogin" data-toggle="popover" data-placement="bottom" data-url="/login.html" data-target="#pnlLogin"/>
        </li>
      </ul>
        `
        return view
    },


    after_render: async () => {
      if (navigator.onLine) {
        document.getElementsByTagName("footer")[0].classList.remove("X");
        document.querySelector("#logo").src = './img/logo.png';
        document.querySelector("#symbol").src = './img/symbol.png';
      }
      else {
        document.getElementsByTagName("footer")[0].classList.add("X");
        document.querySelector("#logo").src = './img/logoOn.png';
        document.querySelector("#symbol").src = './img/symbolOn.png';
      }
  
      
      /* ---------- Main Menu Open/Close, Min/Full ---------- */
      $('.sidebar-toggler').click(function(){
        $('body').toggleClass(this.dataset.toggle);
        resizeBroadcast();
      });
     
      $('.aside-menu-toggler').click(function(){
        $('body').toggleClass('aside-menu-hidden');
        resizeBroadcast();
      });
      
      $('.mobile-sidebar-toggler').click(function(){
        $('body').toggleClass('sidebar-mobile-show');
        resizeBroadcast();
      });
      
      $('.sidebar-close').click(function(){
        $('body').toggleClass('sidebar-opened').parent().toggleClass('sidebar-opened');
      });
      
      /* ---------- Disable moving to top ---------- */
      $('a[href="#"][data-top!=true]').click(function(e){
        e.preventDefault();
      });
      

      var bar = '<div id="pnlLogin" style="width:21em""></div>';
      Popover;
      $('#btnLogin').popover({title:"Perfil Usuario", html:true,content:bar});
      $('#btnLogin').on("click", function(){
        $("#pnlLogin").html(loginComp.popover())
      });
  
      
    }

}

export default NavbarComp;