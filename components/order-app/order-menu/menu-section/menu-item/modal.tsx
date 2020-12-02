import * as React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { observer } from 'mobx-react-lite';

import OrderStore from '../../../stores/order-store';

import { MenuItem } from '../../../../../utilities/contentful-types';
import Image from 'next/image';
import ItemStore from '../../../stores/item-store';
import MenuItemOptions from './menu-item-options';
import { AddToCart } from './add-to-cart';

const Content = styled.div`
  width: 100%;
  position: relative;
  margin-top: -40px;
`;

const ImageContainer = styled.div`
  height: 250px;
`;

const Dismiss = styled.div`
  position: sticky;
  z-index: 1;
  margin-left: auto;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px, rgba(0, 0, 0, 0.04) 0px 4px 4px;
`;

const ImageHero = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  background-image: url(${({ image }) => image});
`;

const Description = styled.div`
  padding: 20px;
  color: #4c4c4c;
  font-size: 16px;
`;

const Name = styled.div`
  font-size: 30px;
  color: #902e2d;
`;

interface ModalProps {
  itemData: MenuItem;
  closeFunc: () => void;
}

const Modal = observer(({ itemData, closeFunc }: ModalProps) => {
  ReactModal.setAppElement('#__next');
  const itemStoreInstance = new ItemStore(
    itemData.title,
    itemData.price,
    [],
    // itemData.optionsCollection.items | [],
  );

  return (
    <ReactModal
      isOpen={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      onRequestClose={closeFunc}
      className="modal-box"
      overlayClassName="modal-overlay"
    >
      <Dismiss onClick={closeFunc}>
        <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24">
          <path
            d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z"
            fill="#4c4c4c"
          />
        </svg>
      </Dismiss>
      <Content>
        {itemData.image && (
          <>
            <ImageContainer>
              <Image src={itemData.image.url} layout="fill" objectFit="cover" />
            </ImageContainer>
          </>
        )}
        <Description>
          <Name>
            <div>{itemData.title}</div>
          </Name>
          <div>{itemData.description}</div>
        </Description>
        <MenuItemOptions itemStore={itemStoreInstance} />
        <AddToCart itemStore={itemStoreInstance} closeFunc={closeFunc} />
      </Content>
      <style global jsx>{`
        .modal-box {
          height: fit-content;
          max-height: calc(100vh - 50px);
          max-width: 620px;
          margin: auto;
          padding: 0;
          position: absolute;
          top: 40px;
          left: 40px;
          right: 40px;
          bottom: 40px;
          background: #fff;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 1px;
          outline: none;
          box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 25px, rgba(0, 0, 0, 0.2) 0px 4px 20px;
        }

        .modal-overlay {
          background-color: rgba(12, 12, 12, 0.75);
          z-index: 1000;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .ReactModal__Body--open,
        .ReactModal__Html--open {
          /* disables background scroll. Disabling now so the page background doesn't jump */
          /*overflow: hidden;*/
        }

        .ReactModal__Overlay {
          opacity: 0;
          transition: opacity 80ms ease-in-out;
        }

        .ReactModal__Overlay--after-open {
          opacity: 1;
        }

        .ReactModal__Overlay--before-close {
          opacity: 0;
        }
      `}</style>
    </ReactModal>
  );
});

export default Modal;
