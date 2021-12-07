<script>
    const hamburger = document.querySelector(
        ".header .nav-bar .nav-list .hamburger"
    );
    const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
    const menu_item = document.querySelectorAll(
        ".header .nav-bar .nav-list ul li a"
    );
    const header = document.querySelector(".header.container");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobile_menu.classList.toggle("active");
    });

    document.addEventListener("scroll", () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 250) {
            header.style.backgroundColor = "#29323c";
        } else {
            header.style.backgroundColor = "transparent";
        }
    });

    menu_item.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            mobile_menu.classList.toggle("active");
        });
    });
</script>

<div id="header">
    <div class="header container">
        <div class="nav-bar">
            <div class="brand">
                <a href="#header">
                    <h1>Martoen<span>.nl</span></h1>
                </a>
            </div>

            <div class="nav-list">
                <div class="hamburger">
                    <div class="bar" />
                </div>

                <ul>
                    <li><a href="#updates" data-after="Updates">Updates</a></li>
                    <li><a href="#projects" data-after="Projects">Projecten</a></li>
                    <li><a href="#about" data-after="About">About</a></li>
                    <li><a href="#contact" data-after="Contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<style>
    #header {
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100vw;
        height: auto;
    }

    #header .header {
        min-height: 8vh;
        background-color: #1f2833;
        transition: 0.3s ease background-color;
    }

    #header .nav-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        max-width: 1300px;
        padding: 0 10px;
    }

    #header .nav-list ul {
        list-style: none;
        position: absolute;
        background-color: #1f2833;
        width: 100vw;
        height: 100vh;
        left: 100%;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        overflow-x: hidden;
        transition: 0.5s ease left;
    }

    #header .nav-list ul a {
        font-size: 2.5rem;
        font-weight: 500;
        letter-spacing: 0.2rem;
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        padding: 20px;
        display: block;
    }

    #header .nav-list ul a::after {
        content: attr(data-after);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        color: gray;
        opacity: 0.4;
        font-size: 7.5rem;
        letter-spacing: 50px;
        z-index: -1;
        transition: 0.3s ease letter-spacing;
    }

    #header .nav-list ul li:hover a::after {
        transform: translate(-50%, -50%) scale(1);
        letter-spacing: initial;
    }

    #header .nav-list ul li:hover a {
        color: #66fcf1;
    }

    #header .hamburger {
        height: 60px;
        width: 60px;
        display: inline-block;
        border: 3px solid white;
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        cursor: pointer;
        transform: scale(0.8);
        margin-right: 20px;
    }

    #header .hamburger::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        border-radius: 50%;
        border: 3px solid white;
        animation: hamburger_puls 1s ease infinite;
    }

    #header .hamburger .bar {
        height: 2px;
        width: 30px;
        position: relative;
        background-color: white;
        z-index: -1;
    }

    #header .hamburger .bar::after,
    #header .hamburger .bar::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        background-color: white;
        transition: 0.3s ease;
        transition-property: top, bottom;
    }

    #header .hamburger .bar::after {
        top: 8px;
    }

    #header .hamburger .bar::before {
        bottom: 8px;
    }

    #header .hamburger.active .bar::before,
    #header .hamburger.active .bar::after {
        top: 0;
        bottom: 0;
    }

    #header .hamburger.active .bar::before {
        bottom: 0;
    }

    #header .hamburger.active .bar::after {
        top: 0;
    }
</style>
