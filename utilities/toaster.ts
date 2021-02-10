import React from 'react';
import { toast } from 'react-toastify';

toast.configure();
export const TOAST_TYPE = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  WARNING: "WARNING",
  INFO: "INFO",
}

interface showToasterProps {
  type: string,
  message: string
}

export function showToaster({ type, message }: showToasterProps) {
  if (type === TOAST_TYPE.SUCCESS) {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
  else if (type === TOAST_TYPE.ERROR)
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  else if (type === TOAST_TYPE.WARNING) {
    toast.warn(message, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
  else if (type === TOAST_TYPE.INFO) {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT
    });
  }
}