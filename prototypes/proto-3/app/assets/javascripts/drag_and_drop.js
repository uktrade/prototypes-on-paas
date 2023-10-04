const pause = _ => new Promise(resolve => setTimeout(resolve, _))


function file_upload(upload_container, file_name){
  upload_container.find('.file_name').html(file_name)
  upload_container.find('.waiting_for_upload').hide()
  upload_container.find('.scanning_file_for_virus').show()
  setTimeout(function () {
    upload_container.find('.scanning_file_for_virus').hide()
    upload_container.find('.uploading_file').show()

    setTimeout(function () {
      upload_container.find('progress').hide()
      upload_container.find('.progress-40').show()
      upload_container.find('.upload_percentage').html('Uploading 40%:')
      setTimeout(function () {
        upload_container.find('progress').hide()
        upload_container.find('.progress-70').show()
        upload_container.find('.upload_percentage').html('Uploading 70%:')
        setTimeout(function () {
          upload_container.find('progress').hide()
          upload_container.find('.progress-100').show()
          upload_container.find('.upload_percentage').html('Uploading 100%:')
          upload_container.find('.uploading_file').hide()
          upload_container.find('.upload_file_complete').show()
        }, 2000)
      }, 2000)
    }, 2000)
  }, 2000)
}

$('input[type="file"]').change(function(){
  let file_name = $(this).val().split(/(\\|\/)/g).pop()
  let upload_container = $(this).closest('.upload-container')
  file_upload(upload_container, file_name)
})

$('.upload-container').on('drop dragdrop', function (ev) {
  $(this).closest('.upload-card').removeClass('upload-card-hover')
  let original_event = ev.originalEvent
  ev.preventDefault()
  ev.stopPropagation()
  console.log('dropped')

  let file_name = original_event.dataTransfer.files[0].name
  file_upload($(this), file_name)
})

$('.upload-container').on('dragover', function (e) {
  e.preventDefault()
  e.stopPropagation()
  console.log('dragged over')
  $(this).closest('.upload-card').addClass('upload-card-hover')
})

$('.upload-container').on('dragleave', function (e) {
  e.preventDefault()
  e.stopPropagation()
  console.log('dragged left')
  $(this).closest('.upload-card').removeClass('upload-card-hover')
})

$(document).ready(function () {
  console.log('ready')
})