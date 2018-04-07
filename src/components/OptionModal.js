import React from 'react';
import { Button, Modal } from 'semantic-ui-react'


class OptionModal extends React.Component{
    render() {

      return (
              <div className="modal">
                  <Modal size="small" open={this.props.isModalOpen} onClose={this.props.closeListener}>
                      <Modal.Header>
                          Random Like
                      </Modal.Header>
                      <Modal.Content>
                          <p>{this.props.content}</p>
                      </Modal.Content>
                      <Button onClick={this.props.closeListener}>
                          Close
                      </Button>
                  </Modal>
              </div>
      )
  }
}

export default OptionModal;