import ModernError from 'modern-errors';

export const BaseError = ModernError.subclass('BaseError');

export const HealthzError = BaseError.subclass('HealthzError');
