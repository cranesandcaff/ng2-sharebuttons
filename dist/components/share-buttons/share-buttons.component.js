import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ShareButton, ShareProvider } from '../../helpers';
export var ShareButtonsComponent = (function () {
    function ShareButtonsComponent() {
        /** Show count on share-buttons, disabled by default */
        this.showCount = false;
        /** Show total counts for all buttons, disabled by default */
        this.totalCount = false;
        /** Indicates weather default style is applied to the buttons */
        this.defaultStyle = true;
        /** Add default class to all buttons */
        this.buttonClass = '';
        /** Buttons default templates */
        this.facebook = '<i class="fa fa-facebook"></i>';
        this.twitter = '<i class="fa fa-twitter"></i>';
        this.linkedIn = '<i class="fa fa-linkedin"></i>';
        this.tumblr = '<i class="fa fa-tumblr"></i>';
        this.google = '<i class="fa fa-google-plus"></i>';
        this.pinterest = '<i class="fa fa-pinterest-p"></i>';
        this.stumbleUpOn = '<i class="fa fa-stumbleupon"></i>';
        this.reddit = '<i class="fa fa-reddit-alien"></i>';
        this.whatsApp = '<i class="fa fa-whatsapp"></i>';
        this.email = '<i class="fa fa-email"></i>';
        this.count = new EventEmitter();
        this.popUpClosed = new EventEmitter();
        /** Total Count: the sum of all buttons share count */
        this.tCount = 0;
    }
    ShareButtonsComponent.prototype.ngOnInit = function () {
        this.buttons = [];
        if (this.facebook) {
            this.buttons.push(new ShareButton(ShareProvider.FACEBOOK, this.facebook, "facebook " + this.buttonClass));
        }
        if (this.twitter) {
            this.buttons.push(new ShareButton(ShareProvider.TWITTER, this.twitter, "twitter " + this.buttonClass));
        }
        if (this.google) {
            this.buttons.push(new ShareButton(ShareProvider.GOOGLEPLUS, this.google, "googleplus " + this.buttonClass));
        }
        if (this.pinterest) {
            this.buttons.push(new ShareButton(ShareProvider.PINTEREST, this.pinterest, "pinterest " + this.buttonClass));
        }
        if (this.linkedIn) {
            this.buttons.push(new ShareButton(ShareProvider.LINKEDIN, this.linkedIn, "linkedin " + this.buttonClass));
        }
        if (this.tumblr) {
            this.buttons.push(new ShareButton(ShareProvider.TUMBLR, this.tumblr, "tumblr " + this.buttonClass));
        }
        if (this.reddit) {
            this.buttons.push(new ShareButton(ShareProvider.REDDIT, this.reddit, "reddit " + this.buttonClass));
        }
        if (this.stumbleUpOn) {
            this.buttons.push(new ShareButton(ShareProvider.STUMBLEUPON, this.stumbleUpOn, "stumbleupon " + this.buttonClass));
        }
        if (this.whatsApp) {
            this.buttons.push(new ShareButton(ShareProvider.WHATSAPP, this.whatsApp, "whatsapp " + this.buttonClass));
        }
        if (this.email) {
            this.buttons.push(new ShareButton(ShareProvider.EMAIL, this.email, "email " + this.buttonClass));
        }
    };
    /** Reset total count on URL changes */
    ShareButtonsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['url']) {
            var currUrl = changes['url'].currentValue;
            var prevUrl = changes['url'].previousValue;
            if (currUrl && currUrl !== prevUrl) {
                this.tCount = 0;
            }
        }
    };
    /** Sum all buttons count & emits total */
    ShareButtonsComponent.prototype.counter = function (count) {
        this.tCount += count;
        this.count.emit(count);
    };
    /** emits closed button type: so user can tell which button has been clicked */
    ShareButtonsComponent.prototype.shareClosed = function (provider) {
        this.popUpClosed.emit(provider);
    };
    ShareButtonsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'share-buttons',
                    template: "\n      <div class=\"sb-container\">\n        <h3>\n          <span *ngIf=\"totalCount && tCount\" class=\"sb-count\">\n            {{tCount | nFormatter: 1}}\n          </span>\n          <span *ngIf=\"shareTitle\" class=\"sb-title\">{{shareTitle}}</span>\n        </h3>\n\n        <div class=\"sb-buttons\" [class.sb-default-style]=\"defaultStyle\">\n          <share-button class=\"sb-button\" *ngFor=\"let button of buttons\"\n          [button]=\"button\"\n          [url]=\"url\"\n          [image]=\"image\"\n          [title]=\"title\"\n          [description]=\"description\"\n          [tags]=\"tags\"\n          [showCount]=\"showCount\"\n          (count)=\"counter($event)\"\n          (popUpClosed)=\"shareClosed($event)\"></share-button>\n        </div>\n      </div>\n    ",
                    styles: ["\n      .sb-container .btn,.sb-container button{display:inline-block;margin-right:5px;background-color:#fff;border-radius:4px;padding:.43333em}.sb-container .btn:hover,.sb-container button:hover{color:#fff}.sb-container a:hover,.sb-container button{cursor:pointer;outline:0;border:0}.sb-container .sb-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:20px 0}.sb-container .sb-buttons .sb-button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.sb-container .sb-buttons .sb-button-count{font-size:.8em;text-align:center;position:relative;color:#333;margin-top:10px}.sb-container .sb-buttons .sb-button-count:before{position:absolute;top:-7px;left:50%;margin-left:-4px;content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #e03237}.sb-container button{max-width:80px;min-width:50px;width:100%;background-color:transparent;margin:5px;font-size:1.2em}.sb-container button:hover{-webkit-transition:all .5s ease;transition:all .5s ease}.sb-default-style .facebook{color:#3b5998}.sb-default-style .facebook:hover{background:#3b5998}.sb-default-style .twitter{color:#00acee}.sb-default-style .twitter:hover{background:#00acee}.sb-default-style .googleplus{color:#e93f2e}.sb-default-style .googleplus:hover{background:#e93f2e}.sb-default-style .stumbleupon{color:#f74425}.sb-default-style .stumbleupon:hover{background:#f74425}.sb-default-style .linkedin{color:#0e76a8}.sb-default-style .linkedin:hover{background:#0e76a8}.sb-default-style .pinterest{color:#c92228}.sb-default-style .pinterest:hover{background:#c92228}.sb-default-style .reddit{color:#ff4006}.sb-default-style .reddit:hover{background:#ff4006}.sb-default-style .tumblr{color:#36465d}.sb-default-style .tumblr:hover{background:#36465d}.sb-default-style .github{color:purple}.sb-default-style .github:hover{background:purple}.sb-default-style .stackoverflow{color:#f48023}.sb-default-style .stackoverflow:hover{background:#f48023}.sb-default-style .whatsapp{color:#128c7e}.sb-default-style .whatsapp:hover{background:#128c7e}\n    "],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    ShareButtonsComponent.ctorParameters = [];
    ShareButtonsComponent.propDecorators = {
        'url': [{ type: Input },],
        'title': [{ type: Input },],
        'description': [{ type: Input },],
        'image': [{ type: Input },],
        'tags': [{ type: Input },],
        'shareTitle': [{ type: Input },],
        'showCount': [{ type: Input },],
        'totalCount': [{ type: Input },],
        'defaultStyle': [{ type: Input },],
        'buttonClass': [{ type: Input },],
        'facebook': [{ type: Input },],
        'twitter': [{ type: Input },],
        'linkedIn': [{ type: Input },],
        'tumblr': [{ type: Input },],
        'google': [{ type: Input },],
        'pinterest': [{ type: Input },],
        'stumbleUpOn': [{ type: Input },],
        'reddit': [{ type: Input },],
        'whatsApp': [{ type: Input },],
        'email': [{ type: Input },],
        'count': [{ type: Output },],
        'popUpClosed': [{ type: Output },],
    };
    return ShareButtonsComponent;
}());
//# sourceMappingURL=share-buttons.component.js.map