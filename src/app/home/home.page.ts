import { Component } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";
import {
  DocumentViewer,
  DocumentViewerOptions,
} from "@ionic-native/document-viewer/ngx";
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { PreviewAnyFile } from "@ionic-native/preview-any-file/ngx";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(
    private navCtrl: NavController,
    private document: DocumentViewer,
    private file: File,
    private transfer: FileTransfer,
    private platform: Platform,
    private preview: PreviewAnyFile
  ) {}

  downloadAndOpenPdf() {
    this.preview
      .preview(
        "https://www.fida.de/fileadmin/user_upload/Stellenausschreibungen_2019/Stellenanzeige_Full_Stack_Entwickler.pdf"
      )
      .then(
        () => {},
        (err) => {
          alert(JSON.stringify(err));
        }
      );
  }
}
