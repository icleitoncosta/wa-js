/*!
 * Copyright 2023 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { assertGetChat, assertWid } from '../../assert';
import { BlockCompose, Wid } from '../../whatsapp';
import { getActiveChat } from './getActiveChat';

/**
 * Get and set a compose content of a chat
 *
 * ```
 * // For get compose content use
 * WPP.chat.composeContents('[number]@c.us');
 *
 * // For set compose content for a chat use
 * WPP.chat.composeContents('[number]@c.us', { text: 'Hello' });
 * ```
 *
 * @category Chat
 */
export async function composeContents(
  chatId: string | Wid,
  data?: {
    ctwaContext?: any;
    ctwaContextLinkData?: any;
    omittedURL?: any;
    text: string;
  }
) {
  const wid = assertWid(chatId);

  const chat = assertGetChat(wid);

  if (typeof data === 'undefined') {
    const result = chat.getComposeContents();
    return {
      ctwaContext: result.ctwaContext,
      ctwaContextLinkData: result.ctwaContextLinkData,
      omittedURL: result.omittedURL,
      text: result.text,
    };
  } else {
    if (getActiveChat()?.id === wid) {
      const compose = document.getElementsByClassName(
        BlockCompose.inputContainer
      );
      const lexicalRichTextInput = compose[0].children[0];
      const conversationComposeBoxInput =
        lexicalRichTextInput.children[0].children[0];
      const span = conversationComposeBoxInput.children[0];

      if (typeof span !== 'undefined') {
        const firstChild: any = span.firstChild;
        if (typeof firstChild !== 'undefined') {
          firstChild.data = data.text;
        }
      }
    }
    chat.setComposeContents(data);
    const result = chat.getComposeContents();
    return {
      ctwaContext: result.ctwaContext,
      ctwaContextLinkData: result.ctwaContextLinkData,
      omittedURL: result.omittedURL,
      text: result.text,
    };
  }
}
