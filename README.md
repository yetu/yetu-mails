yetu-mails
==========

This is a very dumb tool, just to allow the reuse of some styles and images. It takes advantages of the project Ink from Zurb: http://zurb.com/ink/

==== Prepare ====

Before everything else, do:

	npm install

Copy the specs-base.json to specs.json and fill with the configurations for the project that you are preparing to create the email too, or take a look and check if the values doesn't fullfil your requirements (probably they do).

==== How do I create a new email? ====

* Use just ```png``` images.

* Create a new folder inside the folder emails.

* Copy the index.html and the images folder from another template to easy the process.

* Make your modifications.

* Go to terminal and type ```grunt```.

* Enter the name of the folder that you created.

* Check the ```build``` folder to see the result of the compiled template.

==== What this tool do? ====

* It ask the name of the folder that you want to compile.

* Then take you index.html inside the folder and ```inlinecss``` over it, output on the build folder.

* Copy the images from the root images folder, and the specific images for your template.

==== Where to go from here? ====

After create your index.html compiled. Copy it to the project that you want to use, and to the proper replacement, like the name of the user, and the proper paths for the images.

PS: Images need to have a full path on emails, so be advised.