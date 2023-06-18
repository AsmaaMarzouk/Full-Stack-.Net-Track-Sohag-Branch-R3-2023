import { Component } from '@angular/core';
import { TrackData } from 'src/app/Models/track-data';
import { TrackInfo } from 'src/app/Models/track-info';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  // test class
  // property:ClassName
  // trackClass:string="hello";
  trackClass: TrackInfo = new TrackInfo(
    '.NET Track',
    'https://d2o2utebsixu4k.cloudfront.net/media/images/blogs/share_image/6259d765-f7c1-4a2c-98cc-a551338a4bb8.png',
    ['JS', 'ASP', 'Angular']
  );

  // test interface
  track:TrackData={
    trackName:"Full Stack .Net",
    trackNum:42,
    courses:["HTML","Bootstrap","CSS3"]
  }



  sayHello(){
    return "Hello R3 .Net Track";
  }
}
