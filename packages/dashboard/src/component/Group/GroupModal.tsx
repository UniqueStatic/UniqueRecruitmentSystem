import React, { PureComponent } from 'react';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import styles from '../../style/group';

import Modal from '../Modal';

import { Group, Recruitment } from '../../lib/const';

interface Props extends WithStyles {
    userGroup: Group;
    currentRecruitment: Recruitment;
    interviewStage: number;
    counts: number[][];
    modalOpen: boolean;
    handleSelect: (i: number, j: number) => (event: React.ChangeEvent) => void;
    submitAllocation: () => void;
    toggleModal: () => void;
}

class GroupModal extends PureComponent<Props> {

    render() {
        const { classes, currentRecruitment, userGroup, toggleModal, interviewStage, counts, modalOpen, handleSelect, submitAllocation } = this.props;
        const { time1, time2 } = currentRecruitment;
        const translator = { morning: '上午', afternoon: '下午', evening: '晚上' };
        const time = interviewStage === 1 ? time1[userGroup] : time2;
        return (
            <Modal title='选定人数' open={modalOpen} onClose={toggleModal}>
                <div className={classes.chooseContainer}>
                    {time.map(({ date, ...periods }, indexDate) =>
                        <div key={indexDate} className={classes.choose}>
                            <Chip color='primary' label={date} className={classes.chip} />
                            {Object.entries(periods).map(([name, isSet], indexPeriod) =>
                                <TextField
                                    label={translator[name]}
                                    key={indexPeriod}
                                    value={Math.max(counts[indexDate][indexPeriod], 0)}
                                    onChange={handleSelect(indexDate, indexPeriod)}
                                    className={classes.textField}
                                    type='number'
                                    InputLabelProps={{ shrink: true }}
                                    margin='normal'
                                    disabled={!isSet}
                                />
                            )}
                        </div>
                    )}
                    <Typography variant='caption' className={classes.notification}>
                        为了使自动分配更加高效，你可以尝试在能够接受的范围内给各时间段分配更多人数
                    </Typography>
                    <div className={classes.buttonContainer}>
                        <Button
                            color='primary'
                            variant='contained'
                            className={classes.button}
                            onClick={submitAllocation}
                        >开始分配</Button>
                        <Button
                            color='primary'
                            className={classes.button}
                            onClick={toggleModal}
                        >取消分配</Button>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default withStyles(styles)(GroupModal);
