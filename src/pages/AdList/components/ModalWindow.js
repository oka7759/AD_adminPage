import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isHide } from '../../../store/action';
import { Form, Input, Switch, Button, Modal } from 'antd';

import axios from 'axios';
import { useState } from 'react';
const ModalWindow = ({ adList }) => {
  const checkModal = useSelector(state => state.checkModal.value);
  const idx = useSelector(state => state.idx.value);
  const [isActive, setActive] = useState(null);
  const { adType, budget, id, report, startDate, status, title } = adList[idx];

  const dispatch = useDispatch();
  const modifyAd = () => {
    axios.put(
      `https://medup-590f3-default-rtdb.firebaseio.com/ads/${idx}.json`,
      {
        adType: adType,
        budget: budget,
        id: id,
        report: report,
        startDate: startDate,
        status: isActive === true ? 'active' : 'ended',
        title: title,
      }
    );
  };

  const handleOk = () => {
    modifyAd();
    dispatch(isHide());
  };
  const handleCancel = () => {
    dispatch(isHide());
  };

  return (
    <Modal
      title="Basic Modal"
      open={checkModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch
            value={status === 'active' ? true : false}
            onChange={e => {
              setActive(e);
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalWindow;
