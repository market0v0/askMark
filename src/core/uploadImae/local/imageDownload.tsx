import { useCallback, useState } from 'react';

const useImageDownload = () => {
  const [loading, setLoading] = useState(false);

  const downloadImage = useCallback((imageSrc: string) => {
    setLoading(true);
    const image = new Image();
    image.src = imageSrc;
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setLoading(false);
  }, []);

  return { downloadImage, loading };
};

export default useImageDownload;
