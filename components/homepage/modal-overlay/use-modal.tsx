import React, { useEffect, useState } from 'react';

const TMS_STORAGE_ID = 'MEATBALL_MODAL';
const TEN_MINUTES_IN_MILLISECONDS = 600_000;

interface ModalExpiry {
  modalType: string;
  expiry: number;
}

const secondsSince1970 = () => new Date().getTime();

const generateExpiryData = (modalKey: string): string => {
  const data: ModalExpiry = {
    modalType: modalKey,
    expiry: secondsSince1970(),
  };
  return JSON.stringify(data);
};

const validKeyInLocalStorage = (modalKey: string) => {
  const value = localStorage.getItem(TMS_STORAGE_ID);
  if (!value) return false;

  const data: ModalExpiry = JSON.parse(value);
  if (data.modalType !== modalKey) return false;

  return secondsSince1970() - data.expiry < TEN_MINUTES_IN_MILLISECONDS;
};

const setKeyInLocalStorage = (modalKey: string) => localStorage.setItem(TMS_STORAGE_ID, generateExpiryData(modalKey));

export default function useModal(modalKey: string) {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const closeModal = () => {
    setShouldDisplay(false);
    setKeyInLocalStorage(modalKey);
  };

  useEffect(() => {
    if (!validKeyInLocalStorage(modalKey)) setShouldDisplay(true);
  });

  return [shouldDisplay, closeModal];
}
