import os
import shutil

website_menu_contents = [
    {"class": "menu-category", "text": "Aymen's Blog"},
    {"class": "menu-item", "href": "index.html", "text": "Home"},

    
    {"class": "menu-category", "text": "2D Materials"},
    {"class": "menu-item", "href": "2d_graphene.html", "text": "Graphene"},
    {"class": "menu-item", "href": "2d_tmds.html", "text": "TMDs"},
    {"class": "menu-item", "href": "2d_charac_tech.html", "text": "Characterization techniques"},
    {"class": "menu-item", "href": "2d_transfer.html", "text": "Transfer techniques"},

    {"class": "menu-category", "text": "Computer Skills"},
    {"class": "menu-item", "href": "pc_linux.html", "text": "Linux"},
    {"class": "menu-item", "href": "pc_zotero.html", "text": "Zotero"},
    {"class": "menu-item", "href": "pc_gimp.html", "text": "GIMP"},


    {"class": "menu-category", "text": "Extra"},
    {"class": "menu-item", "href": "extra_quotes.html", "text": "Quotes"},
    {"class": "menu-item", "href": "extra_riddles.html", "text": "Riddles"},
    {"class": "menu-item", "href": "extra_movies.html", "text": "Movies"},

    {"class": "menu-category", "text": "Good People"},
    {"class": "menu-item", "href": "good_people_classic.html", "text": "Classic"},    
    {"class": "menu-item", "href": "good_people_modern.html", "text": "Modern"},
    {"class": "menu-item", "href": "good_people_tunisian.html", "text": "Special Tunisian"}
]


def create_project_directories():
    if os.path.isdir("HTML") : shutil. rmtree('HTML')  
    os.mkdir('HTML')

    for i in range(len(website_menu_contents)):
        if website_menu_contents[i]["class"] == "menu-category":
            os.mkdir('HTML/' + website_menu_contents[i]["text"])


def create_pages():
    header = """<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
    "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
    <head>
    <meta name="generator" content="jemdoc, see http://jemdoc.jaboc.net/" />
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <link rel="stylesheet" href="../../Style-Sheet/jemdoc.css" type="text/css" />
    <title>Notes on Statistical Mechanics II</title>
    </head>
    <body>
    <script type="text/javascript">
    var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
    document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
    </script>
    <script type="text/javascript">
    try {
        var pageTracker = _gat._getTracker("UA-131436916-2");
        pageTracker._trackPageview();
    } catch(err) {}</script>
    <table summary="Table for page layout." id="tlayout">
    <tr valign="top">
    <td id="layout-menu">
    """

    menu_end = """
    <td id="layout-content">
    """

    footer = """
    </body>
    </html>
    """
    for i in range(len(website_menu_contents)):
        if website_menu_contents[i]["class"] == "menu-category": 
            directory = website_menu_contents[i]["text"]
        if website_menu_contents[i]["class"] == "menu-item": 
            with open("HTML/" + directory + "/" + website_menu_contents[i]["href"], "w") as file:
                file.write(header)
            
            with open("HTML/" + directory + "/" + website_menu_contents[i]["href"], "a") as file:
                for item_dict in website_menu_contents:
                    if item_dict["class"] == "menu-category":
                        dir_name = item_dict["text"]
                        line = f"<div class=\"menu-category\">{item_dict['text']}</div>"
                    if item_dict["class"] == "menu-item":
                        if website_menu_contents[i]["href"] == item_dict["href"]:
                            line = f"<div class=\"menu-item\"><a href=\"..\\{dir_name}\\{item_dict['href']}\" class=\"current\">{item_dict['text']}</a></div>"
                        else:
                            line = f"<div class=\"menu-item\"><a href=\"..\\{dir_name}\\{item_dict['href']}\">{item_dict['text']}</a></div>"
                    file.write(line)
            
            with open("HTML/" + directory + "/" + website_menu_contents[i]["href"], "a") as file:
                file.write(menu_end)

            with open("Update-Here/" + directory + "/" + website_menu_contents[i]["href"], "r") as file:
                my_content = file.read()

            with open("HTML/" + directory + "/" + website_menu_contents[i]["href"], "a") as file:
                file.write(my_content)

            with open("HTML/" + directory + "/" + website_menu_contents[i]["href"], "a") as file:
                file.write(footer)
        
def main():
    create_project_directories()
    create_pages()

if __name__ == "__main__":
    main()