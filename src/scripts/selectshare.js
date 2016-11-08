class SelectShare {
  static createTooltip () {
    let tooltip = document.createElement('div');
    let socials = ['facebook', 'twitter', 'google'];

    socials.map( social => {
      let element = document.createElement('a');

      element.classList.add(`selectshare-${social}`); 
      tooltip.appendChild(element);
    });

    tooltip.classList.add('select-share');
    document.body.appendChild(tooltip);
  }

  getTooltipPosition (textHasSelectedX, textHasSelectedY, selectShareElement) {
    let selectShareStyle = selectShareElement.style;

    selectShareStyle.position = 'absolute';
    selectShareStyle.left = `${textHasSelectedX}px`;
    selectShareStyle.top = `${textHasSelectedY}px`;
  }

  static getSelectedText () {
    return window.getSelection().toString();
  }

  static getCurrentPosition () {
    this.createTooltip();

    let selectShareElement = document.querySelector('.select-share');
    let selectShareText = this.getSelectedText.length;

    document.addEventListener('click', function (textHasSelected) {
      let textHasSelectedX = textHasSelected.clientX;
      let textHasSelectedY = textHasSelected.clientY;
      let selectShareClass = selectShareElement.classList;

      new SelectShare().getTooltipPosition(textHasSelectedX, textHasSelectedY, selectShareElement);

      if (selectShareText) {
        return selectShareClass.remove('select-share-open');
      } 

      return selectShareClass.toggle('select-share-open');
    })
  }
}

SelectShare.getCurrentPosition();