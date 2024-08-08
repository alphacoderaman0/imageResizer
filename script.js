document.getElementById('fileContent').addEventListener('change', function(){
    const imageContainer = document.getElementById('imageContainer');
    const uploadedImage = document.getElementById('uploadedImage');
    const myfile = this.files[0];
    if(myfile){
        const reader = new FileReader();
        reader.onload = function(e){
            uploadedImage.src = e.target.result;
            imageContainer.style.display = 'block';
        };
        reader.readAsDataURL(myfile);
    }
    else{
        imageContainer.style.display = 'none';
    }
})

document.getElementById('btn1').addEventListener('click',function(){
    resizeImage(1080,1080);
});
document.getElementById('btn2').addEventListener('click',function(){
    resizeImage(1200,630);
});
document.getElementById('btn3').addEventListener('click',function(){
    resizeImage(1200,675);
});
document.getElementById('btn4').addEventListener('click',function(){
    resizeImage(600,300);
});


// function resizeImage(width,height){
//     const uploadedImage = document.getElementById('uploadedImage');
//     uploadedImage.width = width;
//     uploadedImage.height = height;
// }

function resizeImage(width, height) {
    const uploadedImage = document.getElementById('uploadedImage');
    uploadedImage.width = width;
    uploadedImage.height = height;
}