import React, { useEffect, useState } from 'react'
import { message, Spin } from 'antd'

import useLazyFetchData from '@/hooks/useLazyFetchData'
import checkToken from '@/utils/functions/checkToken'
import { config } from '../../../config'
import QRCode from './qrcode'

const GeneratedLink: React.FC = () => {
  const rootUrl = typeof window !== 'undefined' ? window.location.origin : ''

  const [link, setLink] = useState<any>()
  const [generateLink, loading] = useLazyFetchData(
      `${config.BACKEND_ENDPOINT}/generate_link`
  )

  useEffect(() => {
    try {
      const run = async (): Promise<void> => {
        const link = await generateLink()
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        setLink(`${rootUrl}/ask?user=${link.link}`)
      }
      void run()
    } catch (error: any) {
      void message.error('Session Expired')
    }
  }, [checkToken()])

  useEffect(() => {
  }, [link])
  return (
    <div>
    {loading.loading ? <Spin /> : ((link) ? <QRCode message={link} /> : null)}
    {/* {loading.loading ? <Spin /> : <QRCode value={link} style={{ width: '100%', height: 'auto' }} />} */}
  </div>
  )
}

export default GeneratedLink
