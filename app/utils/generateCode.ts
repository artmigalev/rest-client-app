import { HTTPSnippet, type ClientId, type TargetId } from "httpsnippet-lite";
import React from "react";

type InitType = {
  method: string
  url: string,
  headers?: import("har-format").Header[];
}


const generateCode =    async(name: TargetId, clientById: ClientId, ) => {
  const snippet = new HTTPSnippet({
    method: 'get',
    url: 'http://example.com'
  });
  const options = { indent: '\t' };
  const output = await snippet.convert(name, clientById, options);
  return output;
};

export default generateCode;
