module.exports = {
  name: 'nx-angular-ssr',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-angular-ssr',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
