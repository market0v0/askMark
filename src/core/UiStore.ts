import { type SimpleBusiness, type ChatMessage, type ModalData } from '@/utils/types/base'
import { action, observable, makeObservable } from 'mobx'

export default class UiStore {
  isUploadingFile: boolean = false
  isActivatingFile: boolean = false
  modalData: ModalData | null = null
  showModal: boolean = false
  conversation: ChatMessage[] = []
  currentBusiness: SimpleBusiness | null = null

  constructor () {
    makeObservable(this, {
      isUploadingFile: observable,
      isActivatingFile: observable,
      modalData: observable,
      showModal: observable,
      conversation: observable,
      currentBusiness: observable,

      setIsUploadingFile: action,
      setIsActivatingFile: action,
      setModalData: action,
      setConversation: action,
      clearConversation: action,
      setBusiness: action
    })
  }

  setIsUploadingFile = (newValue: any): void => {
    this.isUploadingFile = newValue
  }

  setIsActivatingFile = (newValue: any): void => {
    this.isActivatingFile = newValue
  }

  setModalData = (newValue: ModalData): void => {
    this.modalData = newValue
    this.showModal = true
  }

  setShowModal = (showModal: boolean): void => {
    this.showModal = showModal
  }

  setConversation = (response: any): void => {
    this.conversation = [...this.conversation, response]
  }

  clearConversation = (): void => {
    this.conversation = []
  }

  setBusiness = (business: SimpleBusiness): void => {
    this.currentBusiness = business
  }
}
