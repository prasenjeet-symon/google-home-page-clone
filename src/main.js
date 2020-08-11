
let can_see_menu = false
let can_see_profile= false

const show_menu_pop = ()=>{
    const menu_pop = document.getElementById('menu_pop')
    menu_pop.style.visibility = 'visible'
    can_see_menu = true
}

const hide_menu_pop = ()=>{
    const menu_pop = document.getElementById('menu_pop')
    menu_pop.style.visibility = 'hidden'
    can_see_menu = false
}

const show_profile_pop = ()=>{
    const menu_pop = document.getElementById('profile_pop')
    menu_pop.style.visibility = 'visible'
    can_see_profile = true
}

const hide_profile = ()=>{
    const menu_pop = document.getElementById('profile_pop')
    menu_pop.style.visibility = 'hidden'
    can_see_profile = false
}

document.getElementById('profile_button').addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation()
    hide_menu_pop()
    can_see_profile? hide_profile() : show_profile_pop()
})

document.getElementById('menu_button').addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation()
    hide_profile()
    can_see_menu ? hide_menu_pop() : show_menu_pop()
})

document.getElementsByTagName('body')[0].addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation()
    hide_menu_pop()
    hide_profile()
})