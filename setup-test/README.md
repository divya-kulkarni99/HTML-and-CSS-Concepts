# Instructions
1. Run `npm install`
  * Did you run this **in the correct directory?** See "readings/the-command-line.md" in this repo for more information.
  * In response to running this command you should see some text while it downloads a library or two
  * If you see a permission error (EACCES) you probably installed something as root/administrator, and now your normal user account can't override it. That's a bit messy to clean up, but it's doable and you want to clean that up NOW rather than later in the semester.
  * Lots of ways of addressing this exist, with varying levels of success and computer security.  Speak up on Slack if this is an issue for you.
  * You only need to run this successfully once.  Once the dependencies are installed, you can run the program (see below) as much as needed without reinstalling.  Reinstalling is only necessary if the dependencies are changed.
1. Run `node parse.js`  
  * You should see an error about "people.html" not existing
1. You are going to make changes, so you should first create a "feature branch" to create those changes in
  * run `git checkout -b setup-test`
  * This branch name, "setup-test", is specific to this assignment.  Each assignment will be done in its own branch with a unique name.
1. Create a file in this directory, "people.html".  
  * Edit this file to be valid HTML (including doctype!) with a title element that says "About Me"
  * The unordered list should have the class of `person`
  * You should should have 4 li elements inside your unordered list element
  * Each li element should have text for a human label inside it: "Name", "NEUID", "Slackhandle", and "Github Username"
  * Inside each li, after the text for humans, you should have a single span element
    * The span element should have a class attribute with a value that corresponds to the data inside it ("name", "neuid", "slackhandle", and "github")
    * The span elements should contain the text for that value (example: Your name is inside the span with class "name")
    * Not the Slackhandle should start with "@".  These values, particularly the github username, are case sensitive!
  * Make sure your data is accurate for you!
  * Don't forget to open and close your tags appropriately
  * Don't forget to use double quotes around the values of your attributes
  * Don't forget to include necessary elements (example: html and body, and an unordered list requires list item (li) elements), as well as a doctype
  * To search/google for info, Use `MDN (element)` to search, for example `MDN unordered list` 
  * Example: my span element for "name" would look like `<span class="name">Brett Ritter</span>`
1. If open the people.html file in Chrome, it should resemble the output in sample.png
1. Run `node parse.js` again now that you've saved your changes
  * You should see your information output
  * Everything should run smoothly
  * Fix any errors that do turn up and repeat this step until everything runs smoothly

