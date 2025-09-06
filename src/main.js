import "./style.css";
import { TodoForm } from "./components/TodoForm.js";
import { add, load } from "./utils/todoHandlers.js";

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

import "tailwindcss";



const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
});

// DOM
const form = document.forms.add;
const list = document.querySelector(".todo_list");

// Init
TodoForm(form, { onAdd: (title) => add(title, list) });
load(list); // первая загрузка задач