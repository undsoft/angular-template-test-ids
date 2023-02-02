import requireTestIds, {
  RULE_NAME as requireTestIdsRuleName,
} from './rules/require-test-ids';
import { materialElements, nativeElements } from './utils/elements';

export default {
  nativeElements,
  materialElements,
  [requireTestIdsRuleName]: requireTestIds,
}