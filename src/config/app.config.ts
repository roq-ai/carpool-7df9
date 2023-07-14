interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Team Member', 'Driver', 'Administrator'],
  tenantName: 'Business',
  applicationName: 'CarPool',
  addOns: ['chat', 'notifications', 'file'],
};
