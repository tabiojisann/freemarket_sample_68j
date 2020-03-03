$(function(){
  var dataBox = new DataTransfer();
  var dropArea = document.getElementById("#image-box-1");
  var file_field = document.querySelector('input[type=file]')

  // window.onload = function(e){
  //   //ドラッグした要素がドロップターゲットの上にある時にイベントが発火
  //   dropArea.addEventListener("dragover", function(e){
  //     e.preventDefault();
  //     //ドロップエリアに影がつく
  //     $(this).children('#image-box__container').css({'border': '1px solid rgb(204, 204, 204)','box-shadow': '0px 0px 4px'})
  //   },false);
  //   //ドラッグした要素がドロップターゲットから離れた時に発火するイベント
  //   dropArea.addEventListener("dragleave", function(e){
  //     e.preventDefault();
  //   //ドロップエリアの影が消える
  //     $(this).children('#image-box__container').css({'border': '1px dashed rgb(204, 204, 204)','box-shadow': '0px 0px 0px'})      
  //   },false);
  //   //ドラッグした要素をドロップした時に発火するイベント
  //   dropArea.addEventListener("drop", function(e) {
  //     e.preventDefault();
  //     $(this).children('#image-box__container').css({'border': '1px dashed rgb(204, 204, 204)','box-shadow': '0px 0px 0px'});
  //     var files = e.dataTransfer.files;
  //     //ドラッグアンドドロップで取得したデータについて、プレビューを表示
  //     $.each(files, function(i,file){
  //       //アップロードされた画像を元に新しくfilereaderオブジェクトを生成
  //       var fileReader = new FileReader();
  //       //dataTransferオブジェクトに値を追加
  //       dataBox.items.add(file)
  //       file_field.files = dataBox.files
  //       //lengthで要素の数を取得
  //       var num = $('.item-image').length + i + 1
  //       //指定されたファイルを読み込む
  //       fileReader.readAsDataURL(file);
  //       // 10枚プレビューを出したらドロップボックスが消える
  //       if (num==10){
  //         $('#image-box__container').css('display', 'none')   
  //       }
  //       //image fileがロードされた時に発火するイベント
  //       fileReader.onload = function() {
  //         //変数srcにresultで取得したfileの内容を代入
  //         var src = fileReader.result
  //         var html =
  //         `<div class='item-image' data-image='${file.name}'>
  //           <div class=' item-image__content'>
  //             <div class='item-image__content--icon'>
  //               <img src=${src} width="80" height="80" >
  //             </div>
  //           </div>
  //           <div class='item-image__operetion'>
  //             <div class='item-image__operetion--delete'>削除</div>
  //           </div>
  //         </div>`
  //       //image-box__containerの前にhtmlオブジェクトを追加　
  //       $('#image-box__container').before(html);
  //       };
  //       //image-box__containerにitem-num-(変数)という名前のクラスを追加する
  //       $('#image-box__container').attr('class', `item-num-${num}`)
  //     })
  //   })
  // }
  
  $('.img').change(function(){
　　
    var file = $('input[type="file"]').prop('files')[0];
 
    $.each(this.files, function(i, file){
      var fileReader = new FileReader();
      var num = $('.item-image').length + 1 + i

      dataBox.items.add(file)
      file_field.files = dataBox.files

      fileReader.readAsDataURL(file);

      if (num == 10){
        $('#image-box__container').css('display', 'none')
      }
      fileReader.onloadend = function() {
        var src = fileReader.result
        var html= 
        `<div class=' item-image' data-image='${file.name}'>
          <div class=' item-image__content'>
            <div class='item-image__content--icon'>
              <img src="${src}" width="100" height="100">
            </div>
          </div>
          <div class='item-image__operetion'>
            <div class='item-image__operetion--delete'>削除</div>
          </div>
        </div>`
    
        $('#image-box__container').before(html);
      };

      $('#image-box__container').attr('class', `item-num-${num}`)
     
    
    });
  });
     
  $(document).on("click", '.item-image__operetion--delete', function(){

    var target_image = $(this).parent().parent()

    target_image.remove();

    file_field.val("")
  })
});




