import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './DevtestWebPartWebPart.module.scss';
import * as strings from 'DevtestWebPartWebPartStrings';
import customDate from './assets/dateTime';

export interface IDevtestWebPartWebPartProps {
  title: string;
  description: string;
  showDate: boolean;
}

export default class DevtestWebPartWebPart extends BaseClientSideWebPart<IDevtestWebPartWebPartProps> {

  public render(): void {
    if (this.properties.showDate == true) {
      this.domElement.innerHTML = `
      <div class="${ styles.devtestWebPart}">
        <div class="${ styles.container}">
          <div class="${ styles.row}">
            <div class="${ styles.column}">
              <span class="${ styles.myTitle}">${escape(this.properties.title)}</span>              
              <p class="${ styles.myDescription}">${escape(this.properties.description)}</p>
              <p class="${styles.myDate}">${customDate}</p>                           
            </div>
          </div>
        </div>
      </div>`
    }
    else {
      this.domElement.innerHTML = `
      
            <div class="${ styles.devtestWebPartElse}">
              <div class="${ styles.container}">
                <div class="${ styles.row}">
                  <div class="${ styles.column}">
                    <span class="${ styles.myTitle}">${escape(this.properties.title)}</span>              
                    <p class="${ styles.myDescription}">${escape(this.properties.description)}</p>                         
                  </div>
                </div>
              </div>
            </div>`
    }
  }


  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.TitleFieldLabel
                }),
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneToggle('showDate', {
                  label: strings.showDate
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
