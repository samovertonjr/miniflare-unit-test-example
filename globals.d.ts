interface TomlBindings {
  CACHE_KEY_PREFIX: string;
  KEY: string;
}

declare global {
  const CACHE_KEY_PREFIX: string;
  const KEY: string;
  function getMiniflareBindings(): TomlBindings;
  function getMiniflareDurableObjectStorage(id: DurableObjectId): Promise<DurableObjectStorage>;
}

export {};
