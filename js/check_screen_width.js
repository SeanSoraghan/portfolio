var menu_name = "Home",
    delay = 50, // delay to wait before responding
    timeout = false; // timeout flag for timer

function is_thin_screen()
{
    return screen.width < 700;
}
function check_redirect()
{
    if (is_thin_screen())
    {
        document.location = 'https://seansoraghan.github.io';
    }
}
function is_thin_window()
{
    return window.innerWidth <= 800;
}
function update_nav_menu()
{
    if (nav_menu_div != null)
    {
        if (is_thin_window())
        {
            nav_menu_div.load('html-blocks/nav-menu-dropdown.html');
        }
        else
        {
            nav_menu_div.load('html-blocks/nav-menu-bar.html');
        }
    }
}
function screen_resized()
{
    // clear the timeout
    clearTimeout(timeout);
    // start timing for event "completion"
    timeout = setTimeout(update_nav_menu, delay);
}