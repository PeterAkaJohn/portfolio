var gulp = require('gulp');
var responsive = require('gulp-responsive');
var del = require('del');

gulp.task('clean', function(){
  return del(['images'])
})

gulp.task('default', ['clean'], function () {
  return gulp.src('images_src/**/*')
    .pipe(responsive({
      '*.jpg': {
        width: 1600,
        quality: 30,
        rename: {
          suffix: '-1600_large_2x'
        },
         withoutEnlargement: false
      },
      '*/*.png':
        {
          width: 1600,
          rename:{
            suffix: '-1600_large_2x'
          },
           withoutEnlargement: false
        },
      // produce multiple images from one source
      '*.png':
        {
          width: 1600,
          rename:{
            suffix: '-1600_large_2x'
          },
           withoutEnlargement: false
        }
    },
    {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 30,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
    }
  ))
    .pipe(gulp.dest('images'));
});
