Previously I mentioned that I accidentally gave my file root permissions when I cloned it from Github by using `sudo`. To fix this, I used the command `chmod` after having `chown` partially explained to me and the person changing their mind - I think they originally mixed them up - so I'll write about both.

On Linux and other Unix-like operating systems, there is a set of rules for each file which defines who can access that file, and how they can access it. These rules are called file permissions or file modes. The command name chmod stands for "change mode", and it is used to define the way a file can be accessed.

In general, chmod commands take the form:

`chmod options permissions filename`

If no options are specified, chmod just changes the permissions of the file you chose to the permissions you choose, simple enough. If you want to look at the options available, fire up your man pages in the terminal or try [here](http://www.computerhope.com/unix/uchmod.htm). My explanation also borrows heavily from that link!

If you have a file named cuteKittens, and you want to set its permissions so that you can read, write, and execute it, people in your group can read and execute it and everyone else can just read it, you could type:

`chmod u=rwx,g=rx,o=r cuteKittens`

This example uses symbolic notation. I'll break this down a bit:

- 'u' here means 'user'
- 'g' means "group"
- 'o' means "other".
- "r" means "read"
- "w" means "write"
- and finally "x" means "execute"

To me that seems like a lot to remember and I only found this out by Googling for the article, octal notation is a lot easier though I assume it's easier to accidentally give too high a permission with it.

Here is the same thing using octal permissions notation:

`chmod 754 cuteKittens`

Octal 'chmod` commands are ordered so that the first number refers to me, the current user, the second refers to the group members of the group I am - not completely clear on this part yet - and the third refers to anyone else, or ''others' in command line speak.

The numbers themselves are made up of the numbers `4`, `2`, `1`, and `0` added together:
- `4` stands for "read",
- `2` stands for "write",
- `1` stands for "execute"
- `0` stands for "no permission."
So `7` is made up of `4 + 2 + 1` (read, write, and execute), `5` is `4 + 0 + 1` (read, no write, and execute), and `4` is `4 + 0 + 0` (read, no write, and no execute). I can understand why the symbolic method is preferred in some instances!


The `chmod` commands that are the most important are:
- `777`, which means that everyone can execute, write and read. and is discouraged for obvious reasons
- `755` only my user can execute
- 644 no one can execute, my user can write, others can only read (super safe) minimum permission you can give!

**That's a pretty thorough breakdown of what chmod does, so what is chown?**

I don't think I can put it much better than this:
>Now let's examine the changing of ownership. This will bite you when you install an application in a directory as one user and need to use it as another. So let's say you have a folder in the /opt directory called APP that belongs to user bethany but user jacob needs to own it instead (of course if they both need access you could just change permissions or create a group for this). To change the ownership of this folder (you will need administrative rights to do this) you would issue a command like:

>`sudo chown jacob.jacob /opt/APP`

>The above command would change both ownership and group ownership of the folder (since jacob.jacob was used). If you wanted to leave that folder belonging to the original group issue the command like:

>`sudo chown jacob /opt/APP`

>and the original group ownership would remain intact.

from [ghacks](http://www.ghacks.net/2011/02/18/linux-101-using-chmod-and-chown/)
