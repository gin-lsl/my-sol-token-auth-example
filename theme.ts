import type { ThemeConfig } from 'antd';

export const appTheme: ThemeConfig = {
  token: {
    colorPrimary: '#1c2026',
    colorInfo: '#1c2026',
    colorTextBase: '#1c2026',
    colorBgBase: '#ffffff',
    fontSizeHeading2: 32,
    sizeStep: 4,
    sizeUnit: 4,
    borderRadius: 16,
    colorPrimaryBg: '#eef0f4',
    colorPrimaryText: '#1c2026d9',
    colorPrimaryTextActive: '#000000d9',
    colorPrimaryActive: '#000000d9',
    colorPrimaryTextHover: '#2e3033d9',
    colorText: '#1c2026d9',
    controlItemBgActiveHover: '#eef0f4',
  },

  components: {
    Table: {
      cellPaddingBlockMD: 6,
      cellPaddingInlineMD: 16,
      headerColor: 'rgba(0, 0, 0, 0.45)',
      footerBg: '#F8F9FC',
    },
    Radio: {
      buttonColor: '#000000a6',
      buttonCheckedBg: '#f8f9fc',
    },
    Segmented: {
      itemActiveBg: '#d5dae2',
      itemColor: 'rgba(0, 0, 0, 0.45)',
    },
    Tabs: {
      titleFontSizeLG: 20,
    },
  },
};
