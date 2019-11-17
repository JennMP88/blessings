## 10. **GitHub Collaboration**
1. **Getting Started**
    * Fork & Clone Project 
    * In cloned directory excute *__these__* command: 
        * > ```npm install```
        * > ```git remote add main https://github.com/FiveEightyEight/TeamTwo_YTube```
2. **Building**
    * **NEVER** work on **master** branch
        * **_DO_**:  `git checkout -b 'task_branch'`  
3. **Contributing**: When you've finished working on your branch 
    * Make sure you've saved and commited all work
    * `git checkout master`
    * `git pull main master`
    * `git checkout 'task_branch'`
    * `git merge master`
    * Resolve any conflicts
    * Test App
    * If App tests out OK:
        * > `git push -u origin 'task_branch'` 
    * Pull request your `'task_branch'` to main project repo
        * Add code reviewers from project collaborators list 
