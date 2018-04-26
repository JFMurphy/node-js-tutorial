# Notes - Partial Templates

_Code from part 25 & 26 used._

Partial templates allow us to make a template for a certain part of a webpage that remains consistant such as a navigation section. This means in order to change something about that navigation section it only needs to be done once in the navigation code and not multiple times across multiple files.

1. Create a 'partials' folder in the views folder.
2. Create a .ejs file in the partials folder.
3. Add some elements to the new file such as a nav and a few list elements. (Refer to nav.ejs as an example.)
4. Include the nav.ejs file in the profile view using an include statement.
5. The include statement sits between the ejs tags.
6. Go to the profile view and include the nav view at the beginning of the ```<body>``` tag.
    ```
    <% include partials/nav.ejs %>
    ```
7. Make an 'index.ejs' file. Copy the content from the index.html file.
8. Repeat for the contact file.
9. Change the ```sendFile()``` method in app.js to the ```render()``` method for the two newly added views.
10. Add links to the nav view to index and contact.
11. Run app to check everything works.