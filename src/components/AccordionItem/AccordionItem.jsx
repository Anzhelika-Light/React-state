import { Component } from "react";
import css from "./AccordionItem.module.css";

class AccordionItem extends Component {
  state = {
    isExpanded: false,
  };

  handleClick = () => {
    this.setState(({ isExpanded }) => ({
      isExpanded: !isExpanded,
    }));
  };

  render() {
    const { isExpanded } = this.state;
    const titleClassNames = isExpanded
      ? `${css.title} ${css.isExpanded}`
      : css.title;
    const contentClassNames = isExpanded
      ? `${css.content} ${css.isExpanded}`
      : css.content;

    return (
      <div className={css.container}>
        <div className={css.accordion}>
          <div className={css.accordionItem} onClick={this.handleClick}>
            <p className={titleClassNames}>First Question</p>
            <div className={contentClassNames}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionItem;
