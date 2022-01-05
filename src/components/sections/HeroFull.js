import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroFull extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Eye of the Tiger
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Join the most based team and watch us box past ATH after ATH after ATH 👊🏽
                <br/><a target="_blank" href="https://bscscan.com/address/0x6fb5d4daaa2e80988da709c163793a6f8f039ef9">CONTRACT</a>
                </p>
              </div>
              <div className="container-sm reveal-from-bottom">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://t.me/TheEyeOfTheTiger">
                      <Image
                        src={require('./../../assets/images/links/telegram.svg')}
                        alt="Telegram"
                        width={38}
                        height={38} />
                    </a>
                  </div>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0x6fb5d4daaa2e80988da709c163793a6f8f039ef9">
                      <Image
                        src={require('./../../assets/images/links/pcs.svg')}
                        alt="Pancake Swap"
                        width={38}
                        height={38} />
                    </a>
                  </div>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://poocoin.app/tokens/0x6fb5d4daaa2e80988da709c163793a6f8f039ef9">
                      <Image
                        src={require('./../../assets/images/links/poocoin.svg')}
                        alt="Poocoin"
                        width={38}
                        height={38} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/hero-image.png')}
                alt="Eye of the Tiger"
                width={448}
                height={252} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;