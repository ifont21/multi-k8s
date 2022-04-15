## BASH Lessons

- to get more information about the current directory like permissions `ls -l` 
- to get more information and hidden files `ls -la`
- in order to see a file content you can use `cat <filename>`
- in order to see a file content with line numbers you can use `cat -n <filename>` 
- You can also see a content without getting the long file by using `less <filename>`
- open folders or files `open .git`
- open a file by specifying a text editor `open <filepath> -a TextEdit`
- to create an empty file use `touch <filename>`
- echo is like console.log in bash but you can also write into the file
    - `echo 'hello world'`
    - `echo 'hi' > file.txt`
- in order to append text to the file you can use `echo 'your name' >> file.txt`
- you can create a file also using echo without using touch `echo 'some Text' > file2.txt` 
- to create directories you can use `mkdir new_folder`
- in order to create more than one nested directory you can use `mkdir -p f1/f2`
- to remove directories recursively `rm -rf <filename>`
- to move files `mv <filename-path> <directory>`
- to move files by renaming it `mv <filename-path> <directory>/<new-filename>`
- to move all files under a specific directory `mv <directory>/* <other_directory>`
- to find files under a specific directory `find . -name "*.md"` meaning find me all files which its extension stands for mark down under the current directory I am
- to find files under a specific directory by name with case insensitive `find . -iname "*.jpg"`
- to find by file type in this case by type directory `find . -type d`
- to find by file type in this case by type file `find . -type f`
- to find directories by type and name `find ./client -type d -name "node_modules"`
- to find and delete a directory by type (of course) and name `find ./client -type d -name "node_modules" -delete` meaning find me all type directories under `./client` directory whose name is `node_modules` and delete it. you can also use pattern matching `find dist/ -name "*.build.js" -delete`
- you can search for content using grep like `grep "react" ./client/package.json`
- you can search for content using grep in more than one file using `grep "dependencies" ./**/package.json`
- search using grep with colors and line numbers `grep --color -n "dependencies" ./**/package.json`
- search using grep with colors and line numbers and context `grep --color -n -C 1 "dependencies" ./**/package.json` this means I will be able to see more lines around the search term I will searching for
- searching using grep by regex `grep --color -n -e "react-[scripts|app]" ./client/package.json`
- to make a Get request using `curl` for example `curl https://swapi.dev/api/people/3/`
- to make a request and include response headers `curl -i https://swapi.dev/api/people/3/`. Worth to mention that if you're response is 301 because the resource was moved you can include the redirect to be exec right away `curl -iL https://swapi.dev/api/people/3/`
- make a request using authorization header `curl -H "Authorization: Bearer 123" <url>`
- making a POST request `curl -X POST -H "Content-Type: application/json" -d '{"title": "Curling"}' <url>`
- making a POST request using url encoded `curl -i -X POST --data-urlencoded title="Curling again" --data-urlencoded author="Someone" <url>`
- In order to make request by blocks

```sh
 
 curl -i -X PUT \
 > -d '{"title": "Changed title" }' \
 > -H "Content-Type: application/json" \
 > http://localhost:3000/api/posts/2

```

**-X** is used in order to specify the http method.

**-H** is used in order to specify a header.
- make a request and create a file out of the response `curl -iL https://google.com -o google.txt`

* when you create a bash file using `touch` you will end uo having permission issues so if you run `ls -la` (long listing) you can tell your file has `-rw-r--r--` so you can use `chmod` stands for **change mod** this way `chmod u+x <file>.sh` which means add to the user permissions to execute and after that you will see `-rwxr--r--`
* working from a bash file you can declare variable this way
```sh

echo "$1 World"

```

when I run that like this `sh script.sh hello` **hello** would be the first param-input received here `$1`
* this an example what you can do with bash. Create a bash file to init a javascript project

```sh

echo "Initializing  JS Project at $(pwd)"
git init
npm init -y # create package.json with all the defaults
mkdir src
touch src/index.json
code .

```
* `which` is a command we can use to find an executable like node or java or go
* if you copy your bash script to `usr/local/bin/<filename>` you will be able to execute it everywhere on the terminal
* you can create variables this way `var=123` and then echo it out like `echo $var` trying to echo this from a sh script won't be possible unless you export the variable like this `export var`
* script example where we clone a repo specific branch to a temp directory

```sh

temp=$(mktemp -d)
git clone --branch $1 $PWD $temp
echo "branch $1 cloned to $temp"

# sh clone-temp-branch.sh new 

```


* Functions

```sh

global="global var"

greet(){
    echo "$1 world"
}

test(){
    echo "global = $global"
    local local_var="I'm a local" # creating a local variable
    echo "local_var = $local_var"
}

greeting=$(greet "howdy") # called command substitution

echo "the greeting is $greeting"

test

echo "global = $global"
echo "local_var = $local_var"

```
* You can check the execution status using `echo $?` after an execution like 
  - `ls -l`
  - `echo $?` as a result you can have 0 which means success

* From a script you can use `exit <result_number>`

```sh

ok(){
  exit 0
}

fail(){
  exit 1
}

ok
fail

```
running `script.sh` I will get 1 because is the last execution