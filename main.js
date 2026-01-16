const Hamberer_icon = document.querySelector('.hamberger-menu-icon');
const Menu_items = document.querySelector('.mobile-items');
const Header_container = document.querySelector('.header-container');
const Logo = document.querySelector('.logo')
const Dropdown_btn = document.querySelectorAll('.mobile_dropdown_toggle');
const Dropdown_container = document.querySelectorAll('.dropdown');
const Dropdown_list = document.querySelectorAll('.mobile_dropdown_list');
const topWrapper = document.querySelector('.top-wrapper');
const banner = document.querySelector('.banner-section')
const body = document.body





Hamberer_icon.addEventListener('click', () => {
    Menu_items.classList.toggle('openPanel')
    Hamberer_icon.classList.toggle('drag')
    Header_container.classList.toggle('drag')
    Logo.classList.toggle('drag')
})

const toggleDropdown = (dropdown, menu, isOpen) => {
    const classList_ = dropdown.classList.toggle('open', isOpen);
    console.log(classList_, 'classlist lagi ki nhi');
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0

}

Dropdown_btn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const dropdown = e.target.closest('.dropdown')
        console.log(dropdown, 'closest drpdown');
        const menu = dropdown.querySelector('.mobile_dropdown_list');
        console.log(menu, 'menu drp list');
        const isOpen = dropdown.classList.contains('open');


        console.log(isOpen);

        toggleDropdown(dropdown, menu, !isOpen)

    })
})

const just = document.body.scrollWidth > window.innerWidth
console.log(just, 'just');


const triggerPoint = banner.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY >= triggerPoint) {
        topWrapper.classList.add('fixed-topbar')
        const height_ = topWrapper.offsetHeight;
        body.style.paddingTop = `${height_}px`;
        // body.classList.add('body-offset')
    } else {
        topWrapper.classList.remove('fixed-topbar')
        body.style.paddingTop = '0px';
    }
})



// About Us

// Why Asianet Broadband

// Business

// Enterprise Solutions
// Internet Leased Line – Lite
// Web Hosting

// Others

// Parental Control
// Blog
// Cyber Swachhta Awareness
// Sanchar Saathi Mobile app

// Broadband Plans

// Unlimited Offers
// Offers
// Other Services
// Digital TV

// Contact

// Get Connection
// Customer Care
// Customer Feedback Form
// Go Green
// Nodal Officers
// Appellate
// Modemamc

// Links

// Pay Online
// Get Connection
// Customer Support
// Downloads
// Partner With Us
// What is My IP Address
// Strong Password Generator
// Internet Data Usage Calculator

// Toll free Number

// 1800 425 4725
// Monday – Saturday
// 9.30 – 17.30 hrs

// Connect with us
