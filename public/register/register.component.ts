import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '../../../../../core/services/config.service';
import { fuseAnimations } from '../../../../../core/animations';

import { Router, ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

import * as $ from 'jquery';

var bcrypt = require('bcryptjs');

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2",
  accessKeyId                   : 'AKIAISRXYGF7BCCWHBVA',
  secretAccessKey               : "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",
  'Access-Control-Allow-Origin' : '*',

});


var dynamodb = new AWS.DynamoDB({
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
  apiVersion                    : '2012-08-10',

});

var s3 = new AWS.S3({
  endpoint: "https://s3.amazonaws.com",
  apiVersion                    : '2006-03-01',

});
// import { DBService } from '../../../../../core/services/db.service';

@Component({
    selector   : 'fuse-register',
    templateUrl: './register.component.html',
    styleUrls  : ['./register.component.scss'],
    animations : fuseAnimations
})
export class FuseRegisterComponent implements OnInit
{
    isLinear = false;
    fileName = '';
    profilePic = '';
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    firstFormGroupErrors: any;
    secondFormGroupErrors: any;
    thirdFormGroupErrors: any;
    buisnessTypes = [
      {value       : 'business',
          viewValue: 'Business'
      },
      {value       : 'individual',
          viewValue: 'Individual'
      },
    ];
    groundPhotos = [
      {value       : 'yes',
          viewValue: 'Yes'
      },
      {value       : 'no',
          viewValue: 'No'
      },
    ];
    travelDistances = [
      {value       : '25',
          viewValue: '25'
      },
      {value       : '50',
          viewValue: '50'
      },
      {value       : '75',
          viewValue: '75'
      },
      {value       : '100',
          viewValue: '100'
      },
      {value       : '150',
          viewValue: '150'
      },
      {value       : '200',
          viewValue: '200'
      },
    ];


    constructor(
        private fuseConfig:   FuseConfigService,
        private formBuilder:  FormBuilder,
        private router: Router,
    )
    {
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });
        this.firstFormGroupErrors = {

          username            : {},
          email               : {},
          password            : {},
        //  passwordConfirm     : {}
        };
        this.secondFormGroupErrors = {
          fullName            : {},
          // photoIdPic          : {},
          businessType        : {},
        };

        this.thirdFormGroupErrors = {
          // profilePic          : {},
          zipCode             : {},
          travelDistance      : {},
          groundPhoto         : {},
          terms               : {},
        };
    }

    // uploadfile(event)
    // {
    //     var params = {Key: this.file.name, Body: this.file};
    //
    //     bucket.upload(params, function (err, data) {
    //         console.log(err, data);
    //     });
    // };


    // fileEvent(fileInput: any)
    // {
    //     var files = event.target.files;
    //     var file = files[0];
    //     this.file = file;
    // };
    // unhideFileUpload(){
    //     $(".fileInputBox").toggle();
    //     $(".pictureLabel").toggleClass("pictureBoxToggled");
    // }
    //
    //
    // unhideProfileUpload(){
    //     $(".profileInputBox").toggle();
    //     $(".profilePicLabel").toggleClass("profilePicBoxToggled");
    // }
    //
    // profilePicUpload(event) {
    //
    //   let file = event.target.files[0]; // <--- File Object for future use.
    //   let myMomentImg = moment().toString();
    //   let newName2 = 'Pilot Profile Photo (' + myMomentImg + ')' + file.name ;
    //
    //   this.thirdFormGroup.controls['profilePic'].setValue(file ? newName2 : ''); // <-- Set Value for Validation
    //
    //   var params = {
    //     Bucket: 'spaero-data/pilotProfilePhoto',
    //     Key: newName2,
    //     Body: file
    //   };
    //
    //
    //   s3.upload(params, function (err, data) {
    //     if (err) console.log(err, err.stack);
    //     else     console.log(data);
    //   });
    //
    // }
    //
    // onChange(event) {
    //
    //   let file = event.target.files[0]; // <--- File Object for future use.
    //   let myMomentImg = moment().toString();
    //   let newName = 'Pilot Photo ID (' + myMomentImg + ')' + file.name ;
    //
    //   this.secondFormGroup.controls['photoIdPic'].setValue(file ? newName : ''); // <-- Set Value for Validation
    //
    //   var params = {
    //     Bucket: 'spaero-data/pilotPhotoId',
    //     Key: newName,
    //     Body: file
    //   };
    //
    //   s3.upload(params, function (err, data) {
    //     if (err) console.log(err, err.stack);
    //     else     console.log(data);
    //   });
    //
    // }

    // uploadFile(event)
    // {
    //   var file = event.srcElement.files;
    //   var params = {Key: file[0].name, Body: file};
    //
    //
    // }





    ngOnInit()
    {
      this.firstFormGroup = this.formBuilder.group({
        email                      : ['', [Validators.required, Validators.email]],
        username                   : ['', Validators.required],
        password                   : ['', Validators.required],
          // passwordConfirm            : ['', Validators.required]
      });
      this.secondFormGroup = this.formBuilder.group({
        fullName                   : ['', Validators.required],
        // photoIdPic                 : [this.fileName, Validators.required],
        businessType               : ['', Validators.required],

      });
      this.thirdFormGroup = this.formBuilder.group({
        // profilePic                 : [this.profilePic, Validators.required],
        travelDistance             : ['', Validators.required],
        zipCode                    : ['', Validators.required],
        groundPhoto                : ['', Validators.required],
        terms                      : ['', Validators.requiredTrue],
      });

      this.firstFormGroup.valueChanges.subscribe(() => {
          this.onFirstFormValuesChanged();
      });
      this.secondFormGroup.valueChanges.subscribe(() => {
          this.onSecondFormValuesChanged();
      });
      this.thirdFormGroup.valueChanges.subscribe(() => {
          this.onThirdFormValuesChanged();
      });
    }

    SignUp() {
      var formData1 = this.firstFormGroup.value;
      var formData2 = this.secondFormGroup.value;
      var formData3 = this.thirdFormGroup.value;

      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(formData1.password, salt);
      let myMoment = moment().toString();

      // Query to see if the username exists
      var paramsUsername = {
        ExpressionAttributeValues: {
          ":v1": {
            S: formData1.username
           }
        },
        KeyConditionExpression: "username = :v1",
        ProjectionExpression: "username, fullName, email, businessType, zipCode, travelDistance, groundPhoto",
        TableName: "Pilots"
      };

      var usernameCount = 0;
      dynamodb.query(paramsUsername, function(err, data) {
        if (err) {
          console.log(err, err.stack);
        }   // an error occurred
        else {
          console.log('username check:', data.Count);
          usernameCount = data.Count;

          if (usernameCount === 0) {
            var params2 = {
              Item: {
                "email": {
                  S: formData1.email
                },
               "username": {
                 S: formData1.username
                },
                "password": {
                  S: hash
                },

                "fullName": {
                  S: formData2.fullName
                },
                // "photoIdPic": {
                //   S: formData2.photoIdPic
                // },
                "businessType": {
                  S: formData2.businessType
                },
               // "profilePic": {
               //   S: formData3.profilePic
               // },

               "travelDistance": {
                 S: formData3.travelDistance
               },
               "zipCode": {
                 S: formData3.zipCode
               },
               "groundPhoto": {
                 S: formData3.groundPhoto
               },
               "timeStamp": {
                 S: myMoment
               },
              },

              ReturnConsumedCapacity: "TOTAL",
              TableName: "Pilots"
            };
            console.log(params2);

            dynamodb.putItem(params2, function(err, data) {
             if (err) console.log(err, err.stack);
             else     console.log(data);
            });

            $('.nextButtonToFinish').show();
          } else {
            $('.backButtonToFix').show();
            alert('Please Choose a different username');


          };
        }          // successful response
      });

      // console.log('usernamecount after:', usernameCount);





      // Query to check Submit
      var params3 = {
        ExpressionAttributeValues: {
        ":v1": {
          S: formData1.username
         }
        },
        KeyConditionExpression: "username = :v1",
        ProjectionExpression: "username, fullName, email, photoIdPic, profilePic, businessType, zipCode, travelDistance, groundPhoto",
        TableName: "Pilots"
      };
      dynamodb.query(params3, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });


    }

    onFirstFormValuesChanged()
    {
        for ( const field in this.firstFormGroupErrors )
        {
            if ( !this.firstFormGroupErrors.hasOwnProperty(field) )
            {
                continue;
            }


            this.firstFormGroupErrors[field] = {};

            const control = this.firstFormGroup.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.firstFormGroupErrors[field] = control.errors;
            }
        }
    }
    onSecondFormValuesChanged()
    {
        for ( const field in this.secondFormGroupErrors )
        {
            if ( !this.secondFormGroupErrors.hasOwnProperty(field) )
            {
                continue;
            }


            this.secondFormGroupErrors[field] = {};

            const control = this.secondFormGroup.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.secondFormGroupErrors[field] = control.errors;
            }
        }
    }
    onThirdFormValuesChanged()
    {
        for ( const field in this.thirdFormGroupErrors )
        {
            if ( !this.thirdFormGroupErrors.hasOwnProperty(field) )
            {
                continue;
            }


            this.thirdFormGroupErrors[field] = {};

            const control = this.thirdFormGroup.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.thirdFormGroupErrors[field] = control.errors;
            }
        }
    }
}
