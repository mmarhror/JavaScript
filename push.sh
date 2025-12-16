commit="$1"

git remote set-url origin https://learn.zone01oujda.ma/git/mmarhror/piscine-js.git
git config --global user.name "mmarhror"
git config --global user.email "mohammedmarhror@gmail.com"
git config --global credential.helper store
git add .
git commit -m "$commit"
git push 
git push github