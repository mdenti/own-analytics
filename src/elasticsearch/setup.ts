import { Client } from 'elasticsearch';

export const EVENTS_INDEX = 'eventlog';

async function setupMapping(
  es: Client, index: string, propertyName: string, propertyBody: any,
) {
  const result = await es.indices.getMapping({
    index,
    type: '_doc',
  });
  const mappingExists = !!result[index].mappings._doc.properties[propertyName];
  if (!mappingExists) {
    await es.indices.putMapping({
      index,
      type: '_doc',
      body: {
        properties: {
          [propertyName]: propertyBody,
        },
      },
    });
  }
}

export async function setupIndices(es: Client) {
  if (!(await es.indices.exists({ index: EVENTS_INDEX }))) {
    await es.indices.create({ index: EVENTS_INDEX, body: { mappings: { _doc: {} } } });
  }
  await setupMapping(es, EVENTS_INDEX, 'category', { type: 'keyword' });
  await setupMapping(es, EVENTS_INDEX, 'type', { type: 'keyword' });
  await setupMapping(es, EVENTS_INDEX, 'action', { type: 'keyword' });
  await setupMapping(es, EVENTS_INDEX, 'label', { type: 'keyword' });
  await setupMapping(es, EVENTS_INDEX, 'timestamp', { type: 'date' });
  await setupMapping(es, EVENTS_INDEX, 'ip', { type: 'ip' });
  await setupMapping(es, EVENTS_INDEX, 'url', { type: 'keyword' });
  await setupMapping(es, EVENTS_INDEX, 'urlDomain', { type: 'keyword' });
  await setupMapping(es, EVENTS_INDEX, 'urlPath', { type: 'keyword' });
  await setupMapping(es, EVENTS_INDEX, 'referrer', { type: 'keyword' });
}
